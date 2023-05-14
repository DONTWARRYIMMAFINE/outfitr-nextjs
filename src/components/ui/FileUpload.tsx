"use client";

import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";
import { FileUploadProps } from "react-mui-fileuploader/dist/types/index.types";
import { default as MuiFileUpload } from "react-mui-fileuploader";

export interface FileUpload extends FileUploadProps, WithTranslation {}

const FileUpload = ({ children, onFilesChange, t, multiFile = true, ...props }: FileUpload) => {
  const onError = (err: string) => {
    toast.error(err);
  };

  return (
    <MuiFileUpload
      getBase64={false}
      multiFile={multiFile}
      disabled={false}
      header={t("component.fileUpload.header")!}
      leftLabel={t("component.fileUpload.leftLabel")!}
      rightLabel={t("component.fileUpload.rightLabel")!}
      buttonLabel={t("component.fileUpload.buttonLabel")!}
      buttonRemoveLabel={t("component.fileUpload.buttonRemoveLabel")!}
      maxFileSize={10}
      maxUploadFiles={0}
      acceptedType={"image/*"}
      allowedExtensions={["jpg", "jpeg", "png"]}
      onFilesChange={onFilesChange}
      onError={onError}
      BannerProps={{ elevation: 0, variant: "outlined" }}
      ContainerProps={{
        elevation: 0,
        variant: "outlined",
        sx: { p: 4, borderStyle: "dashed", bgcolor: "background.textField", height: "100%", width: "100%", overflow: "hidden" },
      }}
      onContextReady={(context) => {}}
      {...props}
    >
      {children}
    </MuiFileUpload>
  );
};

export default withTranslation()(FileUpload);
