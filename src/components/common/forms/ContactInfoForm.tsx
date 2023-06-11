"use client";

import { ContactInfoSchema } from "@/components/common/forms/schema/contact-info.schema";
import { Box, Button, Icons, IconTextField } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { UpdateOneUserMutationVariables, useUpdateOneUserMutation } from "@/lib/graphql/schema.generated";
import { omitEmptyFields } from "@/lib/utils/form.utils";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { Formik } from "formik";
import { omit } from "lodash";
import { FC } from "react";
import toast from "react-hot-toast";
import { withTranslation, WithTranslation } from "react-i18next";

interface ContactInfoFormProps extends WithTranslation {}

const ContactInfoForm: FC<ContactInfoFormProps> = ({ t }) => {
  const user = useReactiveVar(loggedInUser);
  const [updateOneUserMutation, { loading }] = useUpdateOneUserMutation();

  const onSubmit = async (values: UpdateOneUserMutationVariables["input"]["update"]) => {
    await updateOneUserMutation({
      variables: {
        input: {
          id: user?.id!,
          update: omitEmptyFields(omit(values, ["email"])),
        },
      },
      onCompleted: ({ updateOneUser }) => {
        loggedInUser(updateOneUser);
        toast.success(t("contactInfo.success"));
      },
      onError: error => toast.error(t("contactInfo.error", { message: error.message })),
    });
  };

  return (
    <Formik
      initialValues={{
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.emailAddress.address,
        phone: user?.phone,
      }}
      validationSchema={ContactInfoSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isValid, values, handleChange, errors }) => (
        <Box display={"flex"} flexDirection={"column"} gap={4}>
          <Box display={"flex"} justifyContent={"space-between"} gap={4}>
            <IconTextField
              id={"firstName"}
              name={"firstName"}
              type={"text"}
              label={t("field.user.firstName.label")}
              placeholder={t("field.user.firstName.placeholder")!}
              value={values.firstName}
              onChange={handleChange}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
              variant={"outlined"}
              iconStart={<Icons.Person />}
              required
              fullWidth
            />
            <IconTextField
              id={"lastName"}
              name={"lastName"}
              type={"text"}
              label={t("field.user.lastName.label")}
              placeholder={t("field.user.lastName.placeholder")!}
              value={values.lastName}
              onChange={handleChange}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
              variant={"outlined"}
              iconStart={<Icons.Person />}
              required
              fullWidth
            />
          </Box>
          <Box display={"flex"} justifyContent={"space-between"} gap={4}>
            <IconTextField
              id={"email"}
              name={"email"}
              type={"email"}
              label={t("field.user.email.label")}
              placeholder={t("field.user.email.placeholder")!}
              value={values.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              variant={"outlined"}
              iconStart={<Icons.Email />}
              disabled
              required
              fullWidth
            />
            <IconTextField
              id={"phone"}
              name={"phone"}
              type={"tel"}
              label={t("field.user.phone.label")}
              placeholder={t("field.user.phone.placeholder")!}
              value={values.phone}
              onChange={handleChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
              variant={"outlined"}
              iconStart={<Icons.Phone />}
              required
              fullWidth
            />
          </Box>
          <Button variant={"primary"} disabled={!isValid} loading={loading} onClick={() => handleSubmit()} fullWidth>
            {t("contactInfo.button.submit.label")}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation(I18NS.Form)(ContactInfoForm);
