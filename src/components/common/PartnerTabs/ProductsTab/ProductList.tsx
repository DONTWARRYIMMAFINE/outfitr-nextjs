"use client";

import Product from "@/components/common/Product";
import { Box, Error, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useProductsQuery } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface ProductListProps extends WithTranslation {}

const ProductList: FC<ProductListProps> = ({ t }) => {
  const user = useReactiveVar(loggedInUser);
  const { data, loading, error } = useProductsQuery({
    variables: {
      filter: {
        brand: {
          userId: {
            eq: user?.id,
          },
        },
      },
    },
  });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      {data.products.nodes.length === 0
        ? <Text variant={"p"}>{t("tabs.products.list.empty")}</Text>
        : <>
          {data?.products.nodes.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </>
      }
    </Box>
  );
};

export default withTranslation(I18NS.Partner)(ProductList);
