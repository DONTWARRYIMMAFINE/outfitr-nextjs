"use client";

import { Routes } from "@/constants/routes";
import { AbilityContext } from "@/lib/casl/Can";
import { Roles, UserFragment } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { useAbility } from "@casl/react";
import { usePathname } from "next-intl/client";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, useEffect } from "react";

export interface ProtectedRoute {
  role: Roles;
  route: string;
}

interface RoutesGuardProps extends PropsWithChildren {
  protectedRoutes?: ProtectedRoute[];
  redirectUrl?: string;
}

const isAllowed = (user: UserFragment | null | undefined, pathName: string, protectRoutes?: ProtectedRoute[]): boolean => {
  // Check if path is public
  const isPublic = !protectRoutes || protectRoutes.length === 0 || !protectRoutes.map(protectedRoute => protectedRoute.route).includes(pathName);

  if (isPublic) {
    return true;
  }

  // No user = no access
  if (!user) {
    return false;
  }

  // Allow all routes for Admin user
  const isAdmin = user.roles.map(role => role.code).includes(Roles.Admin);

  console.log("isAdmin", isAdmin);
  if (isAdmin) {
    return true;
  }

  // Otherwise check if user contains required role
  const protectedRoute = protectRoutes.find(protectedRoute => protectedRoute.route.includes(pathName));

  if (!protectedRoute) {
    console.log("[RoutesGuard] That should never happen");
    return false;
  }

  const targetRole = protectedRoute.role;
  return !!user?.roles.map(role => role.code).includes(targetRole);
};

const RoutesGuard: FC<RoutesGuardProps> = ({ protectedRoutes, redirectUrl = Routes.LogIn.href, children }) => {
  const pathName = usePathname();
  const router = useRouter();
  const ability = useAbility(AbilityContext);
  const user = useReactiveVar(loggedInUser);

  useEffect(() => {
    ability.update(user ? user?.permissions : []);
  }, [ability, user]);

  useEffect(() => {
    if (!isAllowed(user, pathName!, protectedRoutes)) {
      router.push(redirectUrl);
    }
  }, [user, pathName, router, protectedRoutes, redirectUrl]);

  return <>{isAllowed(user, pathName!, protectedRoutes) && children}</>;
};

export default RoutesGuard;
