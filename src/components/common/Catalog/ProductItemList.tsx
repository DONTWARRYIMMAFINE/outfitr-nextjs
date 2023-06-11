"use client";

import ProductItem from "@/components/common/Catalog/ProductItem";
import ProductPagination from "@/components/common/Catalog/ProductPagination";
import { Box, Error } from "@/components/ui";
import { Categories, ProductSortFields, SortDirection, useProductsQuery } from "@/lib/graphql/schema.generated";
import { parseIntOrDefault } from "@/lib/utils/parser.utils";
import { ProductFilterBuilder } from "@/lib/utils/product-filter.builder";
import { ProductSortBuilder } from "@/lib/utils/product-sort.builder";
import { Skeleton } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface ProductCardListProps {
  category?: Categories;
  parentCategory?: Categories;
}

const ProductItemList: FC<ProductCardListProps> = ({ category, parentCategory }) => {
  const searchParams = useSearchParams();

  const limit = parseIntOrDefault(searchParams.get("limit"), 12);
  const offset = parseIntOrDefault(searchParams.get("offset"));

  const [searchQuery, setSearchQuery] = useState(searchParams.get("searchQuery"));
  const [price, setPrice] = useState(searchParams.get("price")?.split(","));
  const [brands, setBrands] = useState(searchParams.get("brands")?.split(","));
  const [colors, setColors] = useState(searchParams.get("colors")?.split(","));
  const [sizes, setSizes] = useState(searchParams.get("sizes")?.split(","));
  const [field, setField] = useState(searchParams.get("field"));
  const [direction, setDirection] = useState(searchParams.get("direction"));

  const { data, loading, error, refetch } = useProductsQuery({
    variables: {
      paging: {
        limit,
        offset,
      },
      filter: new ProductFilterBuilder()
        .category(category, parentCategory)
        .searchQuery(searchQuery)
        .priceRange(price && parseIntOrDefault(price[0]), price && parseIntOrDefault(price[1]))
        .brands(brands)
        .colors(colors)
        .sizes(sizes)
        .build(),
      sorting: new ProductSortBuilder()
        .add(field as ProductSortFields, direction as SortDirection)
        .build()
    },
  });

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const price = searchParams.get("price")?.split(",");
    const brands = searchParams.get("brands")?.split(",");
    const colors = searchParams.get("colors")?.split(",");
    const sizes = searchParams.get("sizes")?.split(",");

    const field = searchParams.get("field") as ProductSortFields;
    const direction = searchParams.get("direction") as SortDirection;
    refetch({
      filter: new ProductFilterBuilder()
        .category(category, parentCategory)
        .searchQuery(searchQuery)
        .priceRange(price && parseIntOrDefault(price[0]), price && parseIntOrDefault(price[1]))
        .brands(brands)
        .colors(colors)
        .sizes(sizes)
        .build(),
      sorting: new ProductSortBuilder()
        .add(field as ProductSortFields, direction as SortDirection)
        .build()
    });
  }, [category, parentCategory, searchParams, refetch]);

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={3}
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
