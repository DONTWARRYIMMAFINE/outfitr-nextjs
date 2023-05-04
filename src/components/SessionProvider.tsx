"use client";

import authenticated from "@/constants/authenticated";
import { useMeQuery } from "@/lib/graphql/schema.generated";
import { useReactiveVar } from "@apollo/client";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactNode, useEffect } from "react";

interface SessionProviderProps {
  children?: ReactNode;
  excludedRoutes?: string[];
}

const SessionProvider: FC<SessionProviderProps> = ({ excludedRoutes, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = useReactiveVar(authenticated);
  const { data, refetch, client } = useMeQuery();
  const user = data?.me;

  useEffect(() => {
    if (!excludedRoutes?.includes(pathname)) {
      refetch();
    }
  }, [pathname, refetch, excludedRoutes]);

  useEffect(() => {
    if (!isAuthenticated && !excludedRoutes?.includes(pathname)) {
      router.push("/login");
      client.resetStore();
    }
  }, [isAuthenticated, router, excludedRoutes]);

  return <>
    {excludedRoutes?.includes(pathname) ? children : <>{user && children}</>}
  </>;
};

export default SessionProvider;
