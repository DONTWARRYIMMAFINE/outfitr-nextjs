"use client";

import RatingPicker from "@/components/common/ProductDetails/RatingPicker";
import { Box, Button, FileUpload, TextField } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { CreateCommentInput } from "@/lib/graphql/schema.generated";
import { Formik } from "formik";
import { FC, useState } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { ExtendedFileProps } from "react-mui-fileuploader/dist/types/index.types";
import { CreateCommentSchema } from "./schema";

interface CreateCommentFormProps extends WithTranslation {
  onSubmit: (values: Omit<CreateCommentInput, "userId" | "productId">, files?: ExtendedFileProps[]) => void;
}

const CreateCommentForm: FC<CreateCommentFormProps> = ({ onSubmit, t }) => {
  const [files, setFiles] = useState<ExtendedFileProps[]>();

  const handleFilesChange = (files: ExtendedFileProps[]) => {
    setFiles(files);
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        rating: 0,
      }}
      validationSchema={CreateCommentSchema}
      onSubmit={values => onSubmit(values, files)}
    >
      {({ handleSubmit, isValid, values, setValues, handleChange, errors }) => (
        <Box component={"form"} display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} gap={4}>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"} gap={2}>
            <TextField
              id={"title"}
              name={"title"}
              type={"text"}
              label={t("field.comment.title.label")}
              placeholder={t("field.comment.title.placeholder")!}
              value={values.title}
              onChange={handleChange}
              error={Boolean(errors.title)}
              helperText={errors.title}
              variant={"outlined"}
              required
              fullWidth
            />
            <RatingPicker rating={values.rating} onChange={value => setValues({ ...values, rating: value })} />
          </Box>
          <TextField
            id={"description"}
            name={"description"}
            type={"text"}
            label={t("field.comment.description.label")}
            placeholder={t("field.comment.description.placeholder")!}
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
            maxUploadFiles={5}
            title={t("field.comment.media.title")!}
            onFilesChange={handleFilesChange}
          />
          <Button variant={"primary"} disabled={!isValid} onClick={() => handleSubmit()} fullWidth>
            {t("createComment.button.share.label")}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation(I18NS.Form)(CreateCommentForm);
