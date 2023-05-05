"use client";

import { Routes } from "@/constants/routes";
import { Roles, useMeQuery, UserFragment } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactNode, useEffect, useMemo, useState } from "react";

export interface ProtectedRoute {
  role: Roles;
  routes: string[];
}

export interface SessionProviderProps {
  protectedRoutes: ProtectedRoute[];
  children?: ReactNode;
}

const checkUserRole = (user: UserFragment | null | undefined, pathName: string, protectRoutes: ProtectedRoute[]): boolean => {
  const isPublic = !protectRoutes.flatMap(protectedRoute => protectedRoute.routes).includes(pathName);

  if (isPublic) {
    return true;
  }

  const targetRole = protectRoutes
    .filter(protectedRoute => protectedRoute.routes.includes(pathName))
    .map(protectedRoute => protectedRoute.role);

  return !!user?.roles.map(role => role.code).includes(targetRole[0]);
};

const SessionProvider: FC<SessionProviderProps> = ({ protectedRoutes, children }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { data, client, loading } = useMeQuery({
    onCompleted: data => loggedInUser(data.me),
    onError: _ => loggedInUser(null),
  });

  useEffect(() => {
    if (!loading && !checkUserRole(data?.me, pathName!, protectedRoutes)) {
      router.push(Routes.Login.href);
      client.resetStore();
    }
  }, [loading, router, client, pathName, protectedRoutes]);

  if (loading) {
    return <div>Loading...</div>
  }

  return <>{checkUserRole(data?.me, pathName!, protectedRoutes) && children}</>;
};

export default SessionProvider;
