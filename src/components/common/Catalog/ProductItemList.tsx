"use client";

import ProductItem from "@/components/common/Catalog/ProductItem";
import ProductPagination from "@/components/common/Catalog/ProductPagination";
import { Box } from "@/components/ui";
import { useProductsQuery } from "@/lib/graphql/schema.generated";
import { parseIntOrDefault } from "@/lib/utils/parser.utils";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface ProductCardListProps {
  category: string;
}

// const prepareFilter = (
//   searchQuery: string | null | undefined) => {
//   return {
//     filter: {
//       and: [
//         {
//           or: [
//             {
//               title: {
//                 iLike: `%${searchQuery}%`
//               }
//             },
//             {
//               description: {
//                 iLike: `%${searchQuery}%`
//               }
//             }
//           ],
//           category: {
//             code: {
//               eq: category
//             }
//           }
//         }
//       ]
//     }
//   }
// }

const ProductItemList: FC<ProductCardListProps> = ({ category }) => {
  const searchParams = useSearchParams();

  const limit = parseIntOrDefault(searchParams.get("limit"), 12);
  const offset = parseIntOrDefault(searchParams.get("offset"));

  const { data, loading, error, refetch } = useProductsQuery({
    variables: {
      paging: {
        limit,
        offset,
      },
    },
  });

  if (loading || !data) return <Box>Loading...</Box>;
  if (error) return <Box>Error...</Box>;

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
