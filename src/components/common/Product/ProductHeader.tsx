"use client";

import { PriceRange } from "@/components/common";
import { Box, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { ProductFragment } from "@/lib/graphql/schema.generated";
import { map } from "lodash";
import moment from "moment";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface ProductHeaderProps extends WithTranslation {
  product: ProductFragment;
}

const ProductHeader: FC<ProductHeaderProps> = ({ product, t }) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
      <Box display={"flex"} flexDirection={"column"}>
        <Box display={"flex"} gap={2}>
          <Text variant={"p"} opacity={0.7}>{t("header.title.label")}</Text>
          <Text variant={"p"}>{product.title}</Text>
        </Box>
        <Box display={"flex"} gap={2}>
          <Text variant={"p"} opacity={0.7}>{t("header.brand.label")}</Text>
          <Text variant={"p"}>{product.brand.name}</Text>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
        <PriceRange fontSize={24} prices={map(product.productVariants, "price")} />
        <Text variant={"p"} opacity={0.7}>{moment(product.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</Text>
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.Product)(ProductHeader);
