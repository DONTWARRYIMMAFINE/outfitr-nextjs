"use client";

import { CheckboxGroup, CheckboxGroupProps } from "@/components/common";
import { Box, Error, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useSizesQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface SizesFilterProps extends Omit<CheckboxGroupProps, "options">, WithTranslation {}

const SizesFilter: FC<SizesFilterProps> = ({ t, tReady, ...props }) => {
  const { data, loading, error } = useSizesQuery();

  if (error) return <Error message={t("content.filter.sizes.error", { message: error.message })!} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} width={"100%"} />;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"}>{t("content.filter.sizes.label")}</Text>
      <CheckboxGroup options={data.sizes.nodes} {...props} />
    </Box>
  );
};

export default withTranslation(I18NS.Catalog)(SizesFilter);
