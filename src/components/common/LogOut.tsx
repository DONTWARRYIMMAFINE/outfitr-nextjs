"use client";

import { Link } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { LOCAL_STORAGE_TOKEN } from "@/constants/token";
import { useLogoutMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { FC } from "react";

interface LogOutProps {}

const LogOut: FC<LogOutProps> = ({}) => {
  const [logoutMutation, { client }] = useLogoutMutation();

  const onLogout = async () => {
    await logoutMutation({
      onCompleted: _ => {
        client.resetStore();
        localStorage.removeItem(LOCAL_STORAGE_TOKEN);
        loggedInUser(null);
      },
    });
  };

  return (
    <Link onClick={onLogout}>
      {Routes.LogOut.title}
    </Link>
  );
};

export default LogOut;
