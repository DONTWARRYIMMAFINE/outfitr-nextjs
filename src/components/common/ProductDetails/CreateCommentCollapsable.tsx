"use client";

import CollapsableBox, { CollapsableBoxProps } from "@/components/common/CollapsableBox";
import CommentForm from "@/components/common/forms/CommentForm";
import { Box, IconButton, Icons, Link, Text } from "@/components/ui";
import { CommentsDocument, CreateCommentInput, useCreateOneCommentMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";
import { ExtendedFileProps } from "react-mui-fileuploader/dist/types/index.types";

interface CreateCommentCollapsableProps extends Omit<CollapsableBoxProps, "Header">, WithTranslation {
  productId: string;
}

const CreateCommentCollapsable: FC<CreateCommentCollapsableProps> = ({ productId, t }) => {
  const user = useReactiveVar(loggedInUser);
  const [createOneCommentMutation] = useCreateOneCommentMutation();

  const onSubmit = async (values: Omit<CreateCommentInput, "userId" | "productId">, files?: ExtendedFileProps[]) => {
    await createOneCommentMutation({
      onCompleted: _ => toast.success("Comment uploaded"),
      onError: _ => toast.error("Unable to upload a comment"),
      refetchQueries: [CommentsDocument],
      variables: {
        input: {
          comment: {
            userId: user?.id!,
            productId,
            ...values,
          },
        },
        files,
      },
    });
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2} padding={4} bgcolor={"background.body"} borderRadius={0.5}>
      <Box display={"flex"} flexDirection={"column"}>
        <Text variant={"p"}>Already ordered this item?</Text>
        <Text variant={"small"} opacity={0.7}>Share your opinion with us</Text>
      </Box>
      <CollapsableBox
        variant={"transparent"}
        Header={
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            width={"100%"}
            bgcolor={"background.textField"}
            borderRadius={0.5}
            border={1}
            borderColor={"background.component"}
            padding={2}
            gap={2}
          >
            <Link sx={{ opacity: 0.7 }}>
              <Text>{t("component.button.createComment")}</Text>
            </Link>
            <IconButton>
              <Icons.Add />
            </IconButton>
          </Box>
        }
      >
        <CommentForm onSubmit={onSubmit} />
      </CollapsableBox>
    </Box>
  );
};

export default withTranslation()(CreateCommentCollapsable);
