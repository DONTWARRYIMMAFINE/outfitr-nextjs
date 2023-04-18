import { Text } from "@/components/ui";
import { TextProps } from "@/components/ui/Text";
import { FC } from "react";

interface CopyrightProps extends Omit<TextProps, "children"> {}

const Copyright: FC<CopyrightProps> = ({ ...props }) => {
  return <Text marginTop={2} {...props}>Copyright ©{new Date().getFullYear()} Outfitr. All Rights Reserved</Text>;
};

export default Copyright;
