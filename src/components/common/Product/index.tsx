import CollapsableBox, { CollapsableBoxProps } from "@/components/common/CollapsableBox";
import ProductContent from "@/components/common/Product/ProductContent";
import ProductHeader from "@/components/common/Product/ProductHeader";
import { ProductFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";

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
