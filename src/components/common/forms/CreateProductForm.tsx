"use client";

import { BrandSelect, CategorySelect } from "@/components/common";
import { CreateProductVariantGroupForm } from "@/components/common/forms";
import { Box, Button, FileUpload, Text, TextField } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { CreateProductInput, CreateProductVariantInput } from "@/lib/graphql/schema.generated";
import { Formik } from "formik";
import { FC, useState } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { ExtendedFileProps } from "react-mui-fileuploader/dist/types/index.types";
import { CreateProductSchema } from "./schema";

interface CreateProductFormProps extends WithTranslation {
  onSubmit: (values: CreateProductInput, files?: ExtendedFileProps[]) => void;
}

const CreateProductForm: FC<CreateProductFormProps> = ({ onSubmit, t }) => {
  const [files, setFiles] = useState<ExtendedFileProps[]>();

  const handleFilesChange = (files: ExtendedFileProps[]) => {
    setFiles(files);
  };

  return (
    <Formik
      initialValues={{
        brandId: "",
        categoryId: "",
        title: "",
        description: "",
        productVariants: [] as Partial<CreateProductVariantInput>[],
      }}
      validationSchema={CreateProductSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values, files);
        resetForm();
      }}
    >
      {({ handleSubmit, isValid, values, setValues, handleChange, errors }) => (
        <Box component={"form"} display={"flex"} flexDirection={"column"} width={"100%"} gap={4}>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"} gap={2}>
            <BrandSelect
              id={"brandId"}
              name={"brandId"}
              value={values.brandId}
              onChange={value => setValues({ ...values, brandId: value })}
              error={Boolean(errors.brandId)}
              fullWidth
            />
            <CategorySelect
              id={"categoryId"}
              name={"categoryId"}
              value={values.categoryId}
              onChange={value => setValues({ ...values, categoryId: value })}
              error={Boolean(errors.categoryId)}
              fullWidth
            />
          </Box>
          <TextField
            id={"title"}
            name={"title"}
            type={"text"}
            label={t("field.product.title.label")}
            placeholder={t("field.product.title.placeholder")!}
            value={values.title}
            onChange={handleChange}
            error={Boolean(errors.title)}
            helperText={errors.title}
            variant={"outlined"}
            required
            fullWidth
          />
          <TextField
            id={"description"}
            name={"description"}
            type={"text"}
            label={t("field.product.description.label")}
            placeholder={t("field.product.description.placeholder")!}
            value={values.description}
            onChange={handleChange}
            error={Boolean(errors.description)}
            helperText={errors.description}
            variant={"outlined"}
            required
            fullWidth
            minRows={8}
            maxRows={12}
            multiline
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 0.5,
                padding: 2,
                resize: "vertical",
              },
            }}
            inputProps={{ style: { resize: "vertical" } }}
          />
          <FileUpload
            multiFile={true}
            maxUploadFiles={10}
            title={t("field.product.media.title")!}
            onFilesChange={handleFilesChange}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            bgcolor={"background.textField"}
            border={0.25}
            borderColor={"background.component"}
            borderRadius={1}
            padding={4}
            width={"100%"}
            gap={4}
          >
            <Text>{t("field.product.variant.list.label")}: {values.productVariants.length}</Text>
            <CreateProductVariantGroupForm
              onSubmit={productVariants => setValues({
                ...values,
                productVariants: [...values.productVariants, ...productVariants],
              })}
            />
          </Box>
          <Button variant={"primary"} disabled={!isValid} onClick={() => handleSubmit()} fullWidth>
            {t("createProduct.button.submit.label")}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation(I18NS.Form)(CreateProductForm);
