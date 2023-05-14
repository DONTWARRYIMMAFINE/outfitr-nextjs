"use client";

import { Link } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { LOCAL_STORAGE_TOKEN } from "@/constants/token";
import { useLogoutMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { WithTranslation, withTranslation } from "react-i18next";

interface LogOutProps extends WithTranslation {}

const LogOut = ({ t }: LogOutProps) => {
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
      {t(Routes.LogOut.i18nKey)}
    </Link>
  );
};

export default withTranslation("navigation")(LogOut);
