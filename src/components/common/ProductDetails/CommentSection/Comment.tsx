import Stars from "@/components/common/ProductDetails/Stars";
import { Box, Image, Text } from "@/components/ui";
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
        <Text variant={"h4"}>{comment.title}</Text>
        <Stars starsCount={comment.rating} />
      </Box>
      <Text variant={"p"} opacity={0.7}>{comment.description}</Text>
      <Box display={"flex"} gap={1}>
        {comment.media.map(({ id, url, width, height }, index) => (
          <Box key={id} position={"relative"} width={80} height={125} borderRadius={0.25} overflow={"hidden"}>
            <Image
              src={url} alt={"Ops..."}
              style={{ objectFit: "contain" }}
              fill
            />
          </Box>
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} gap={1}>
        <Text variant={"small"}>{comment.user.fullName}</Text>
        <Text variant={"small"} opacity={0.7}>{moment(comment.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</Text>
      </Box>
    </Box>
  );
};

export default Comment;
