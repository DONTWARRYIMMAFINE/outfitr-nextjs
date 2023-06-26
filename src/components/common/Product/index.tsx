import { CollapsableBox, CollapsableBoxProps } from "@/components/common";
import { ProductFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import ProductContent from "./ProductContent";
import ProductHeader from "./ProductHeader";

interface ProductProps extends Omit<CollapsableBoxProps, "Header"> {
  product: ProductFragment;
}

const Product: FC<ProductProps> = ({ product, expandByDefault = false }) => {
  return (
    <CollapsableBox Header={<ProductHeader product={product} />} expandByDefault={expandByDefault}>
      <ProductContent product={product} />
    </CollapsableBox>
  );
};

export default Product;
