"use client";

import { Box, Button, IconTextField, ProfileIcon } from "@/components/ui";
import { LoginMutationVariables, useLoginMutation } from "@/lib/graphql/schema.generated";
import { SignInSchema } from "@/lib/schema/signin.schema";
import { Formik } from "formik";
import { FC } from "react";

interface LogInFormProps {}

const LogInForm: FC<LogInFormProps> = ({}) => {
  const [loginMutation] = useLoginMutation();

  const onSubmit = async (values: LoginMutationVariables) => {
    try {
      const { data } = await loginMutation({
        variables: values,
      });

      alert(JSON.stringify(data, null, 2));
    } catch (error) {
      alert(JSON.stringify(error, null, 2));
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={values => onSubmit({ input: values })}
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
            error={touched.email && Boolean(errors.email)}
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
            error={touched.password && Boolean(errors.password)}
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