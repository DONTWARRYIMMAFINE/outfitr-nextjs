"use client";

import SecureIconTextField from "@/components/SecureIconTextField";
import { Box, Button, Icons, IconTextField } from "@/components/ui";
import FileUpload from "@/components/ui/FileUpload";
import { Routes } from "@/constants/routes";
import { LOCAL_STORAGE_TOKEN } from "@/constants/token";
import { SignupMutationVariables, useSignupMutation } from "@/lib/graphql/schema.generated";
import { omitEmptyFields } from "@/lib/utils/form.utils";
import { SignUpSchema } from "@/lib/validation/signup.schema";
import { loggedInUser } from "@/store/user.store";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC, useState } from "react";
import toast from "react-hot-toast";

interface SignupFormProps {
  redirectUrl?: string;
}

const SignupForm: FC<SignupFormProps> = ({ redirectUrl = Routes.Home.href }) => {
  const router = useRouter();
  const [signupMutation, { error }] = useSignupMutation();
  const [file, setFile] = useState<File | null>(null);
  
  const onFileChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (fileList) {
      setFile(fileList[0]);
    }
  };

  const onSubmit = async (values: SignupMutationVariables["input"]) => {
    await signupMutation({
      variables: { input: omitEmptyFields(values) as SignupMutationVariables["input"], file },
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
      validationSchema={SignUpSchema}
      onSubmit={values => onSubmit(values)}
    >
      {({ handleSubmit, isValid, values, handleChange, touched, errors }) => (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={"100%"}
          gap={4}
          component={"form"}
        >
          <IconTextField
            id={"email"}
            name={"email"}
            label={"Email"}
            placeholder={"Enter Your Email"}
            type={"email"}
            value={values.email}
            onChange={handleChange}
            error={touched.email && (Boolean(errors.email) || !!error)}
            helperText={touched.email && errors.email}
            variant={"outlined"}
            iconStart={<Icons.Email />}
            required
            fullWidth
          />
          <IconTextField
            id={"phone"}
            name={"phone"}
            label={"Phone"}
            placeholder={"Enter Your Phone"}
            type={"tel"}
            value={values.phone}
            onChange={handleChange}
            error={touched.phone && Boolean(errors.phone)}
            helperText={touched.phone && errors.phone}
            variant={"outlined"}
            iconStart={<Icons.Phone />}
            fullWidth
          />
          <IconTextField
            id={"firstName"}
            name={"firstName"}
            label={"First Name"}
            placeholder={"Enter Your First Name"}
            value={values.firstName}
            onChange={handleChange}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
            variant={"outlined"}
            iconStart={<Icons.Credentials />}
            required
            fullWidth
          />
          <IconTextField
            id={"lastName"}
            name={"lastName"}
            label={"Last Name"}
            placeholder={"Enter Your Last Name"}
            value={values.lastName}
            onChange={handleChange}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
            variant={"outlined"}
            iconStart={<Icons.Credentials />}
            required
            fullWidth
          />
          <FileUpload
            multiFile={false}
            maxUploadFiles={1}
            title={"Upload your avatar"}
            onChange={onFileChangeHandler}
          />
          <SecureIconTextField
            id={"password"}
            name={"password"}
            label={"Password"}
            placeholder={"Enter your password"}
            value={values.password}
            onChange={handleChange}
            error={touched.password && (Boolean(errors.password) || !!error)}
            helperText={touched.password && errors.password}
            variant={"outlined"}
            iconStart={<Icons.Key />}
            required
            fullWidth
          />
          <SecureIconTextField
            id={"passwordConfirmation"}
            name={"passwordConfirmation"}
            label={"Password Confirmation"}
            placeholder={"Repeat your password"}
            value={values.passwordConfirmation}
            onChange={handleChange}
            error={touched.passwordConfirmation && (Boolean(errors.passwordConfirmation) || !!error)}
            helperText={touched.passwordConfirmation && errors.passwordConfirmation}
            variant={"outlined"}
            iconStart={<Icons.Key />}
            required
            fullWidth
          />
          <Box display={"flex"} gap={2}>
            <Button disabled={!isValid} variant={"primary"} onClick={() => handleSubmit()}>Sign Up</Button>
            <Button href={Routes.LogIn.href} variant={"transparent"}>Log In</Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default SignupForm;
