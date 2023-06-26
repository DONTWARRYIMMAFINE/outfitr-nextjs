"use client";

import { RoundedCheckboxGroup, RoundedCheckboxGroupProps } from "@/components/common";
import { Box, Error, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useColorsQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface ColorsFilterProps extends Omit<RoundedCheckboxGroupProps, "options">, WithTranslation {}

const ColorsFilter: FC<ColorsFilterProps> = ({ t, tReady, ...props }) => {
  const { data, loading, error } = useColorsQuery();

  if (error) return <Error message={t("content.filter.colors.error", { message: error.message })!} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} width={"100%"} />;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"}>{t("content.filter.colors.label")}</Text>
      <RoundedCheckboxGroup options={data.colors.nodes} {...props} />
    </Box>
  );
};

export default withTranslation(I18NS.Catalog)(ColorsFilter);
