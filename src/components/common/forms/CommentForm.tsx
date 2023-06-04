"use client";

import { CommentSchema } from "@/components/common/forms/schema/comment.schema";
import RatingPicker from "@/components/common/ProductDetails/RatingPicker";
import { Box, Button, TextField } from "@/components/ui";
import FileUpload from "@/components/ui/FileUpload";
import { CommentFragment, CreateCommentInput } from "@/lib/graphql/schema.generated";
import { Formik } from "formik";
import { FC, useState } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { ExtendedFileProps } from "react-mui-fileuploader/dist/types/index.types";

interface CommentFormProps extends WithTranslation {
  comment?: CommentFragment;
  onSubmit: (values: Omit<CreateCommentInput, "userId" | "productId">, files?: ExtendedFileProps[]) => void;
}

const CommentForm: FC<CommentFormProps> = ({ comment, onSubmit, t }) => {
  const [files, setFiles] = useState<ExtendedFileProps[]>();

  const handleFilesChange = (files: ExtendedFileProps[]) => {
    setFiles(files);
  };

  return (
    <Formik
      initialValues={{
        title: comment?.title || "",
        description: comment?.description || "",
        rating: comment?.rating || 0,
      }}
      validationSchema={CommentSchema}
      onSubmit={values => onSubmit(values, files)}
    >
      {({ handleSubmit, isValid, values, setValues, handleChange, errors }) => (
        <Box component={"form"} display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} gap={4}>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"} gap={2}>
            <TextField
              id={"title"}
              name={"title"}
              type={"text"}
              label={t("component.form.comment.title.label")}
              placeholder={t("component.form.comment.title.placeholder")!}
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
            label={t("component.form.comment.description.label")}
            placeholder={t("component.form.comment.description.placeholder")!}
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
            title={t("component.form.comment.media.title")!}
            onFilesChange={handleFilesChange}
          />
          <Button variant={"primary"} disabled={!isValid} onClick={() => handleSubmit()} fullWidth>
            {t("component.button.share")}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation()(CommentForm);
