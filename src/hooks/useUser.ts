"use client";

import { SessionContext } from "@/components/SessionProvider";
import { useContext } from "react";

export const useUser = () => {
  return useContext(SessionContext);
};
