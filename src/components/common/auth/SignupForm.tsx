"use client";

import { Box, Button, IconTextField, ProfileIcon } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { LOCAL_STORAGE_TOKEN } from "@/constants/token";
import { SignupMutationVariables, useSignupMutation } from "@/lib/graphql/schema.generated";
import { SignInSchema } from "@/lib/schema/signin.schema";
import { loggedInUser } from "@/store/user.store";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { FC } from "react";
import toast from "react-hot-toast";

interface SignupFormProps {
  redirectUrl?: string;
}

const SignupForm: FC<SignupFormProps> = ({ redirectUrl = Routes.Home.href }) => {
  const router = useRouter();
  const [signupMutation, { error }] = useSignupMutation();

  const onSubmit = async (values: SignupMutationVariables["input"]) => {
    await signupMutation({
      variables: { input: values },
      onCompleted: ({ signup }) => {
        const { accessToken, user } = signup;

        loggedInUser(user);
        localStorage.setItem(LOCAL_STORAGE_TOKEN, accessToken);
        router.push(redirectUrl);

        toast.success(`Hi, ${user.fullName}`);
      },
      onError: error => toast.error(error.message),
    });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirmation: "",
    }}
      validationSchema={SignInSchema}
      onSubmit={values => onSubmit(values)}
    >
      {({ handleSubmit, isValid, values, handleChange, touched, errors }) => (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} gap={4}>
          <IconTextField
            id="email"
            name="email"
            label="Email"
            placeholder={"Enter Your Email"}
            value={values.email}
            onChange={handleChange}
            error={touched.email && (Boolean(errors.email) || !!error)}
            helperText={touched.email && errors.email}
            variant={"outlined"}
            iconStart={<ProfileIcon />}
            fullWidth
          />
          <IconTextField
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder={"Enter your password"}
            value={values.password}
            onChange={handleChange}
            error={touched.password && (Boolean(errors.password) || !!error)}
            helperText={touched.password && errors.password}
            variant={"outlined"}
            iconStart={<ProfileIcon />}
            fullWidth
          />
          <Button disabled={!isValid} variant={"primary"} onClick={() => handleSubmit()}>Sign In</Button>
        </Box>
      )}
    </Formik>
  );
};

export default SignupForm;
