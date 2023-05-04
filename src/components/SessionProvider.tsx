"use client";

import { useMeQuery } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactNode, useEffect } from "react";

export interface SessionProviderProps {
  protectedRoutes?: string[];
  children?: ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = ({ protectedRoutes, children }) => {
  const { refetch, client } = useMeQuery({
    onCompleted: data => loggedInUser(data.me),
    onError: _ => loggedInUser(null),
  });
  const router = useRouter();
  const pathName = usePathname();
  const user = useReactiveVar(loggedInUser);

  useEffect(() => {
    if (protectedRoutes?.includes(pathName)) {
      refetch();
    }
  }, [refetch, protectedRoutes]);

  useEffect(() => {
    if (!user && protectedRoutes?.includes(pathName)) {
      router.push("/login");
      client.resetStore();
    }
  }, [user, router, pathName, protectedRoutes, client]);

  return <>{children}</>;
};

export default SessionProvider;
