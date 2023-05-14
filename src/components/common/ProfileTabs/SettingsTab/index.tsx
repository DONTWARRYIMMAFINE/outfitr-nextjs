"use client";

import ResetPasswordForm from "@/components/common/forms/ResetPasswordForm";
import { Box, Container, TabPanel, Text } from "@/components/ui";
import { TabPanelProps } from "@/components/ui/TabPanel";
import { useResetPasswordMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface SettingsTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const SettingsTab = ({ t, tReady, ...props }: SettingsTabProps) => {
  const [resetPassword] = useResetPasswordMutation();

  const onSubmit = async () => {
    await resetPassword({
      onCompleted: ({ resetPassword: user }) => {
        loggedInUser(user);
        toast.success("Password changed successfully");
      },
      onError: error => toast.error(error.message),
    });
  };

  return (
    <TabPanel {...props}>
      <Text variant={"h1"} component={"h2"} textAlign={"center"}>
        {t("tabs.settings.title")}
      </Text>
      <Text variant={"p"} textAlign={"center"} opacity={0.7} paragraph>
        {t("tabs.settings.description")}
      </Text>
      <ResetPasswordForm onSubmit={onSubmit} />
    </TabPanel>
  );
};

export default withTranslation("profile")(SettingsTab);
