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
  const router = useRouter();
  const pathName = usePathname();
  const { client } = useMeQuery({
    onCompleted: data => {
      console.log("data", data);
      loggedInUser(data.me);
    },
    onError: error => {
      console.log("error", error);
      loggedInUser(null);
    },
  });
  const user = useReactiveVar(loggedInUser);
  console.log("user", user);

  useEffect(() => {
    if (!user && protectedRoutes?.includes(pathName)) {
      router.push("/login");
      client.resetStore();
    }
  }, [user, router, pathName, protectedRoutes, client]);

  return <>{!protectedRoutes?.includes(pathName) ? (children) : (user && children)}</>;
};

export default SessionProvider;
