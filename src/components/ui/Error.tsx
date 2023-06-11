import { Text } from "@/components/ui";
import { FC } from "react";

export interface ErrorProps {
  message: string;
}

const Error: FC<ErrorProps> = ({ message = "Error" }) => {
  return <Text variant={"p"} color={"error"}>{message}</Text>;
};

export default Error;
