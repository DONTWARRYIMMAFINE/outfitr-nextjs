import Stars from "@/components/common/ProductDetails/Stars";
import { Box, Text } from "@/components/ui";
import { CommentFragment } from "@/lib/graphql/schema.generated";
import moment from "moment";
import { FC } from "react";

interface CommentProps {
  comment: CommentFragment;
}

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2} padding={4} bgcolor={"background.body"} borderRadius={0.5}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={1}>
          <Text variant={"small"}>{comment.user.fullName},</Text>
          <Text variant={"small"} opacity={0.7}>{moment(comment.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</Text>
        </Box>
        <Stars starsCount={comment.rating} />
      </Box>
      <Text variant={"p"} opacity={0.7}>{comment.description}</Text>
    </Box>
  );
};

export default Comment;
