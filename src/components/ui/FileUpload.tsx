import { FC } from "react";
import toast from "react-hot-toast";
import { FileUploadProps } from "react-mui-fileuploader/dist/types/index.types";
import { default as MuiFileUpload } from "react-mui-fileuploader";

const FileUpload: FC<FileUploadProps> = ({ children, onFilesChange, ...props }) => {
  const onError = (err: string) => {
    toast.error(err);
  };

  return (
    <MuiFileUpload
      getBase64={false}
      multiFile={true}
      disabled={false}
      header={"[Drag to drop]"}
      leftLabel={"or"}
      rightLabel={"to select files"}
      buttonLabel={"click here"}
      buttonRemoveLabel={"Remove all"}
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
      {...props}
    >
      {children}
    </MuiFileUpload>
  );
};

export default FileUpload;
