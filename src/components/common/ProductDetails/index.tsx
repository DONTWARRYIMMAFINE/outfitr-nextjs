"use client";

import Details from "@/components/common/ProductDetails/Details";
import ImageViewer from "@/components/common/ProductDetails/ImageViewer";
import { Grid } from "@/components/ui";
import { useOneProductQuery } from "@/lib/graphql/schema.generated";
import { LngProps } from "@/lib/types/params.type";
import { FC } from "react";

interface ProductDetailsProps extends LngProps {
  productId: string;
}

const ProductDetails: FC<ProductDetailsProps> = ({ productId, lng }) => {
  const { data, loading, error } = useOneProductQuery({ variables: { productId } });

  if (error) {
    return <div>Error</div>;
  }

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ImageViewer media={data.product?.media!}/>
      </Grid>
      <Grid item xs={6}>
        <Details product={data.product!} />
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
