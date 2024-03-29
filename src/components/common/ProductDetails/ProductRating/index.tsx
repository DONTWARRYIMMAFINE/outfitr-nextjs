"use client";

import { Box, Error, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { CommentFragment, useCommentsQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { meanBy } from "lodash";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import RatingRow from "./RatingRow";

function filterCommentsByRating(rating: number, comments: CommentFragment[]) {
  return comments.filter(comment => comment.rating === rating);
}

interface ProductRatingProps extends WithTranslation {
  productId: string;
}

const ProductRating: FC<ProductRatingProps> = ({ productId, t }) => {
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

  const rating = meanBy(data.comments.nodes, "rating") ? meanBy(data.comments.nodes, "rating").toFixed(1) : t("content.productRating.empty");

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Box>
        <Text variant={"p"}>{t("content.productRating.label")}: </Text>
        <Text variant={"p"} color={"primary"}>{rating}</Text>
      </Box>
      <Box>
        {[...Array(5)].map((item, i) => (
          <RatingRow key={i} starsCount={5 - i} commentsCount={filterCommentsByRating(5 - i, data.comments.nodes).length} />
        ))}
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.ProductDetails)(ProductRating);
