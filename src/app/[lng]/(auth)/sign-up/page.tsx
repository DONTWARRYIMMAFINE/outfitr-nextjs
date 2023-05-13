import SignupForm from "@/components/common/forms/SignupForm";
import { Box, Link, Text } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { Metadata } from "next";
import { FC } from "react";
import ContentContainer from "@/components/ui/ContentContainer";

export const metadata: Metadata = {
  title: "Outfitr | Sign Up",
};

interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = ({}) => {
  return (
    <ContentContainer maxWidth={"sm"} pageTitle={"Sign Up"}>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4}>
        <Text variant={"h1"} component={"h2"}>Welcome</Text>
        <Text variant={"p"} textAlign={"center"} opacity={0.7} paragraph>Tell us about yourself</Text>
        <SignupForm />
        <Box display={"flex"} gap={1}>
          <Text variant={"small"} opacity={0.7}>Already have an account?</Text>
          <Link href={Routes.LogIn.href} color={"primary"}>
            <Text variant={"small"} color={"primary"}>Let Me In!</Text>
          </Link>
        </Box>
      </Box>
    </ContentContainer>
  );
};

export default SignUpPage;
