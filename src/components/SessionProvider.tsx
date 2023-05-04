"use client";

import { useMeQuery, UserFragment } from "@/lib/graphql/schema.generated";
import { createContext, FC, ReactNode, useState } from "react";

type UserValueType = UserFragment | undefined | null;

type SessionContextType = {
  user: UserValueType;
  setUser: (user: UserValueType) => void;
};

export const SessionContext = createContext<SessionContextType>(null!);

export interface SessionProviderProps {
  children: ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserValueType>(undefined);
  const { loading } = useMeQuery({
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      setUser(data.me);
    },
    onError: () => {
      setUser(null);
    },
  });

  if (loading) {
    return <></>;
  }

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
