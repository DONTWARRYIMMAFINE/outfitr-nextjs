"use client";

import { Error, Grid } from "@/components/ui";
import { useCommentsQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import Comment from "./Comment";

interface CommentListProps {
  productId: string;
}

const CommentList: FC<CommentListProps> = ({ productId }) => {
  const { data, loading, error } = useCommentsQuery({
    variables: {
      filter: {
        productId: {
          eq: productId,
        },
      },
    },
  });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <Grid container spacing={4}>
      {data.comments.nodes.map(comment => (
        <Grid key={comment.id} item xs={6}>
          <Comment comment={comment} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CommentList;
