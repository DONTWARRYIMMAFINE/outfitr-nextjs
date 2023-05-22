import Catalog from "@/components/common/Catalog";
import ProductDetails from "@/components/common/ProductDetails";
import { ContentContainer } from "@/components/ui";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Outfitr | Product",
};

type PageProps = LngParamsProps & {
  params: {
    id: string;
  }
};

const ProductPage: FC<PageProps> = ({ params }) => {
  const { id, lng } = params;

  return (
    <ContentContainer pageTitle={"Product Details Page"}>
      <ProductDetails productId={id} lng={lng} />
    </ContentContainer>
  );
};

export default ProductPage;
