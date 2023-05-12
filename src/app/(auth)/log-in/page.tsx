import LoginForm from "@/components/common/forms/LoginForm";
import { Box, Link, Text } from "@/components/ui";
import { Metadata } from "next";
import { FC } from "react";
import ContentContainer from "../../../components/ui/ContentContainer";

export const metadata: Metadata = {
  title: "Outfitr | Log In",
};

interface LogInPageProps {}

const LogInPage: FC<LogInPageProps> = ({}) => {
  return (
    <ContentContainer maxWidth={"sm"} pageTitle={"Login"}>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4}>
        <Text variant={"h1"} component={"h2"}>Welcome back</Text>
        <Text variant={"p"} textAlign={"center"} opacity={0.7} paragraph>Use your credentials below and login to your account</Text>
        <LoginForm />
        <Box display={"flex"} gap={1}>
          <Text variant={"small"} opacity={0.7}>Don’t have an account?</Text>
          <Link href={"signup"} color={"primary"}><Text variant={"small"} color={"primary"}>Let Me In!</Text></Link>
        </Box>
      </Box>
    </ContentContainer>
  );
};

export default LogInPage;
