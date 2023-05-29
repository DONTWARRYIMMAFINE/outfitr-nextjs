"use client";

import CommentSection from "@/components/common/ProductDetails/CommentSection";
import Details from "@/components/common/ProductDetails/Details";
import ImageViewer from "@/components/common/ProductDetails/ImageViewer";
import { Error, Grid } from "@/components/ui";
import { useOneProductQuery } from "@/lib/graphql/schema.generated";
import { LngProps } from "@/lib/types/params.type";
import { Skeleton } from "@mui/material";
import { FC } from "react";

interface ProductDetailsProps extends LngProps {
  productId: string;
}

const ProductDetails: FC<ProductDetailsProps> = ({ productId, lng }) => {
  const { data, loading, error } = useOneProductQuery({ variables: { productId } });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton height={180} />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ImageViewer media={data.product?.media!} />
      </Grid>
      <Grid item xs={6}>
        <Details product={data.product!} />
      </Grid>
      <Grid item xs={12}>
        <CommentSection productId={data.product?.id!} />
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
