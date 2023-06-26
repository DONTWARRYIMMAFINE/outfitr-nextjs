"use client";

import { CheckboxGroup, CheckboxGroupProps } from "@/components/common";
import { Box, Error, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useBrandsQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

export interface BrandsFilterProps extends Omit<CheckboxGroupProps, "options">, WithTranslation {}

const BrandsFilter: FC<BrandsFilterProps> = ({ t, tReady, ...props }) => {
  const { data, loading, error } = useBrandsQuery();

  if (error) return <Error message={t("content.filter.brands.error", { message: error.message })!} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} width={"100%"} />;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"}>{t("content.filter.brands.label")}</Text>
      <CheckboxGroup options={data.brands.nodes} {...props} />
    </Box>
  );
};

export default withTranslation(I18NS.Catalog)(BrandsFilter);
