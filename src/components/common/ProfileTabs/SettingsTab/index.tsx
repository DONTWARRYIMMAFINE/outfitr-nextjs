"use client";

import { ResetPasswordForm } from "@/components/common/forms";
import { TabPanel, Text } from "@/components/ui";
import { TabPanelProps } from "@/components/ui/TabPanel";
import { I18NS } from "@/constants/I18NS";
import { ResetPasswordMutationVariables, useResetPasswordMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface SettingsTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const SettingsTab = ({ t, tReady, ...props }: SettingsTabProps) => {
  const user = useReactiveVar(loggedInUser);
  const [resetPassword] = useResetPasswordMutation();

  const onSubmit = async (values: ResetPasswordMutationVariables["input"]["update"]) => {
    await resetPassword({
      variables: { input: { id: user?.id!, update: values } },
      onCompleted: ({ resetPassword: user }) => {
        loggedInUser(user);
        toast.success(t("tabs.settings.success"));
      },
      onError: error => toast.error(t("tabs.settings.error", { message: error.message })),
    });
  };

  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("tabs.settings.title")}
      </Text>
      <ResetPasswordForm onSubmit={onSubmit} />
    </TabPanel>
  );
};

export default withTranslation(I18NS.Profile)(SettingsTab);
