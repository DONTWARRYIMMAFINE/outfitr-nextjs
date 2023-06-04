"use client";

import ResetPasswordForm from "@/components/common/forms/ResetPasswordForm";
import { TabPanel, Text } from "@/components/ui";
import { TabPanelProps } from "@/components/ui/TabPanel";
import {ResetPasswordMutationVariables, useResetPasswordMutation} from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";
import {useReactiveVar} from "@apollo/client";

interface SettingsTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const SettingsTab = ({ t, tReady, ...props }: SettingsTabProps) => {
  const user = useReactiveVar(loggedInUser);
  const [resetPassword] = useResetPasswordMutation();

  const onSubmit = async (values: ResetPasswordMutationVariables["input"]["update"]) => {
    await resetPassword({
      variables: { input: { id: user?.id!, update: values } },
      onCompleted: ({ resetPassword: user }) => {
        loggedInUser(user);
        toast.success("Password changed successfully");
      },
      onError: error => toast.error(error.message),
    });
  };

  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("page.profile.tabs.settings.title")}
      </Text>
      <ResetPasswordForm onSubmit={onSubmit} />
    </TabPanel>
  );
};

export default withTranslation()(SettingsTab);
