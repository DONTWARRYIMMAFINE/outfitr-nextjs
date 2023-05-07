"use client";

import { useMeQuery } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { FC, PropsWithChildren, ReactNode } from "react";

export interface SessionProviderProps extends PropsWithChildren {
  children?: ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const { loading } = useMeQuery({
    onCompleted: data => loggedInUser(data.me),
    onError: _ => loggedInUser(null),
  });

  return <>{!loading && children}</>;
};

export default SessionProvider;
