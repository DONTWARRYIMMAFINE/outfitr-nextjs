import { Text } from "@/components/ui";
import { TextProps } from "@/components/ui/Text";
import { useTranslation } from "@/lib/i18n";
import { LngProps } from "@/lib/types/params.type";
import { Trans } from "react-i18next/TransWithoutContext";

interface CopyrightProps extends Omit<TextProps, "children">, LngProps {}

const Copyright = async ({ lng, ...props }: CopyrightProps) => {
  const { t } = await useTranslation(lng, "footer");

  return (
    <Text
      {...props}
    >
      Copyright ©{new Date().getFullYear()}.
      <Trans i18nKey={"copyright"} t={t} />
    </Text>
  );
};

export default Copyright;
