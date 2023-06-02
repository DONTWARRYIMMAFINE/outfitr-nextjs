"use client";

import CitySelect from "@/components/common/CitySelect";
import CountrySelect from "@/components/common/CountrySelect";
import { CreateAddressSchema } from "@/components/common/forms/schema/create-address.schema";
import { Box, Button, Icons, IconTextField } from "@/components/ui";
import { CreateAddressInput } from "@/lib/graphql/schema.generated";
import { Formik } from "formik";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

export interface CreateAddressFormProps extends WithTranslation {
  onSubmit: (values: CreateAddressInput) => Promise<void> | void;
}

const CreateAddressForm: FC<CreateAddressFormProps> = ({ onSubmit, t }) => {
  return (
    <Formik
      initialValues={{
        postalCode: "",
        countryId: "",
        cityId: "",
        state: "",
        street: "",
        building: "",
      }}
      validationSchema={CreateAddressSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isValid, values, setValues, handleChange, errors }) => (
        <Box component={"form"} display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} gap={4}>
          <Box display={"flex"} gap={4} width={"100%"}>
            <CountrySelect
              id={"countryId"}
              name={"countryId"}
              value={values.countryId}
              onChange={value => setValues({ ...values, countryId: value })}
              error={Boolean(errors.countryId)}
              fullWidth
            />
            <CitySelect
              id={"cityId"}
              name={"cityId"}
              value={values.cityId}
              onChange={value => setValues({ ...values, cityId: value })}
              country={values.countryId}
              error={Boolean(errors.cityId)}
              fullWidth
            />
            <IconTextField
              id={"postalCode"}
              name={"postalCode"}
              type={"text"}
              label={t("component.form.postalCode.label")}
              placeholder={t("component.form.postalCode.placeholder")!}
              value={values.postalCode}
              onChange={handleChange}
              error={Boolean(errors.postalCode)}
              helperText={errors.postalCode}
              variant={"outlined"}
              iconStart={<Icons.PostalCode />}
              required
              fullWidth
            />
          </Box>
          <Box display={"flex"} gap={4} width={"100%"}>
            <IconTextField
              id={"state"}
              name={"state"}
              type={"text"}
              label={t("component.form.state.label")}
              placeholder={t("component.form.state.placeholder")!}
              value={values.state}
              onChange={handleChange}
              error={Boolean(errors.state)}
              helperText={errors.state}
              variant={"outlined"}
              iconStart={<Icons.State />}
              fullWidth
            />
            <IconTextField
              id={"street"}
              name={"street"}
              type={"text"}
              label={t("component.form.street.label")}
              placeholder={t("component.form.street.placeholder")!}
              value={values.street}
              onChange={handleChange}
              error={Boolean(errors.street)}
              helperText={errors.street}
              variant={"outlined"}
              iconStart={<Icons.Street />}
              fullWidth
            />
            <IconTextField
              id={"building"}
              name={"building"}
              type={"text"}
              label={t("component.form.building.label")}
              placeholder={t("component.form.building.placeholder")!}
              value={values.building}
              onChange={handleChange}
              error={Boolean(errors.building)}
              helperText={errors.building}
              variant={"outlined"}
              iconStart={<Icons.Building />}
              fullWidth
            />
          </Box>
          <Button disabled={!isValid} variant={"primary"} onClick={() => handleSubmit()} fullWidth>
            {t("component.button.save")}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation()(CreateAddressForm);
