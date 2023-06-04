"use client";

import ProductItem from "@/components/common/Catalog/ProductItem";
import ProductPagination from "@/components/common/Catalog/ProductPagination";
import { Box, Error } from "@/components/ui";
import { useProductsQuery } from "@/lib/graphql/schema.generated";
import { parseIntOrDefault } from "@/lib/utils/parser.utils";
import { ProductFilterBuilder } from "@/lib/utils/product-filter.builder";
import { Skeleton } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";

interface ProductCardListProps {
  category?: string;
  parentCategory?: string;
}

const ProductItemList: FC<ProductCardListProps> = ({ category, parentCategory }) => {
  const searchParams = useSearchParams();

  const limit = parseIntOrDefault(searchParams.get("limit"), 12);
  const offset = parseIntOrDefault(searchParams.get("offset"));

  const { data, loading, error, refetch } = useProductsQuery({
    variables: {
      paging: {
        limit,
        offset,
      },
      filter: new ProductFilterBuilder()
        .category(category, parentCategory)
        .build(),
    },
  });

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery") || "";
    const price = searchParams.get("price")?.split(",") || [];
    const brands = searchParams.get("brands")?.split(",") || [];
    const colors = searchParams.get("colors")?.split(",") || [];
    const sizes = searchParams.get("sizes")?.split(",") || [];
    refetch({
      filter: new ProductFilterBuilder()
        .category(category, parentCategory)
        .searchQuery(searchQuery)
        .priceRange(parseIntOrDefault(price[0]), parseIntOrDefault(price[1]))
        .brands(brands)
        .colors(colors)
        .sizes(sizes)
        .build(),
    });
  }, [searchParams]);

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        width={"100%"}
        gap={3}
      >
        {data?.products.nodes?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Box>
      <ProductPagination />
    </Box>
  );
};

export default ProductItemList;
