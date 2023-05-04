"use client";

import { Box, Button, IconTextField, ProfileIcon } from "@/components/ui";
import { LoginMutationVariables, useLoginMutation } from "@/lib/graphql/schema.generated";
import { SignInSchema } from "@/lib/schema/signin.schema";
import { loggedInUser } from "@/store/user.store";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { FC } from "react";
import toast from "react-hot-toast";

interface LogInFormProps {}

const LogInForm: FC<LogInFormProps> = ({}) => {
  const router = useRouter();
  const [loginMutation, { error }] = useLoginMutation();

  const onSubmit = async (values: LoginMutationVariables["input"]) => {
    await loginMutation({
      variables: { input: values },
      onCompleted: ({ login }) => {
        loggedInUser(login.user);
        localStorage.setItem("token", login.accessToken);
        router.push("/");
        toast.success(`Hello back, ${login.user.fullName}`);
      },
      onError: error => toast.error(error.message),
    });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
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

export default LogInForm;
