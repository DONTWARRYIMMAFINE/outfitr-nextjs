"use client";

import { Avatar, Box, Button } from "@/components/ui";
import FileUpload from "@/components/ui/FileUpload";
import { I18NS } from "@/constants/I18NS";
import { useUpdateAvatarMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";
import { ExtendedFileProps } from "react-mui-fileuploader/dist/types/index.types";

interface AvatarUpdateProps extends WithTranslation {}

const AvatarUpdate: FC<AvatarUpdateProps> = ({ t }) => {
  const user = useReactiveVar(loggedInUser);
  const [updateAvatarMutation, { loading }] = useUpdateAvatarMutation();
  const [file, setFile] = useState<ExtendedFileProps | null>(null);

  const handleFilesChange = (files: ExtendedFileProps[]) => {
    setFile([...files][0]);
  };

  const onSaveClick = async () => {
    await updateAvatarMutation({
      onCompleted: ({ updateAvatar: user }) => {
        loggedInUser(user);
        toast.success(t("tabs.main.avatarUpdate.success"));
      },
      onError: error => toast.error(t("tabs.main.avatarUpdate.success", { message: error.message })),
      variables: {
        input: {
          id: user?.id!,
        },
        file,
      },
    });
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Box display={"flex"} alignItems={"center"} gap={4}>
        <Avatar variant={"rounded"} src={user?.avatar?.url} sx={{ width: 256, height: 256 }} loading={loading} />
        <FileUpload
          multiFile={false}
          maxUploadFiles={1}
          title={t("tabs.main.avatarUpdate.fileUpload.avatar.label")!}
          onFilesChange={handleFilesChange}
        />
      </Box>
      <Button variant={"primary"} onClick={onSaveClick} loading={loading}>
        {t("tabs.main.avatarUpdate.button.save.label")}
      </Button>
    </Box>
  );
};

export default withTranslation(I18NS.Profile)(AvatarUpdate);
