"use client";

import { Box, Error, Grid } from "@/components/ui";
import { useOneProductQuery } from "@/lib/graphql/schema.generated";
import { LngProps } from "@/lib/types/params.type";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import CommentSection from "./CommentSection";
import CreateCommentCollapsable from "./CreateCommentCollapsable";
import Details from "./Details";
import ImageViewer from "./ImageViewer";

interface ProductDetailsProps extends LngProps {
  productId: string;
}

const ProductDetails: FC<ProductDetailsProps> = ({ productId, lng }) => {
  const { data, loading, error } = useOneProductQuery({ variables: { productId } });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ImageViewer media={data.product?.media!} />
      </Grid>
      <Grid item xs={6}>
        <Box display={"flex"} flexDirection={"column"} height={"100%"} gap={2}>
          <Details product={data.product!} />
          <Box sx={{ mt: "auto" }}>
            <CreateCommentCollapsable productId={productId} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <CommentSection productId={data.product?.id!} />
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
