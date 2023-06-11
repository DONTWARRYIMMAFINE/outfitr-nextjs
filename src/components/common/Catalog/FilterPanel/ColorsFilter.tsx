"use client";

import ColorCheckboxGroup from "@/components/common/ColorCheckboxGroup";
import { Box, Text } from "@/components/ui";
import Error from "@/components/ui/Error";
import { I18NS } from "@/constants/I18NS";
import { useColorsQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface ColorsFilterProps extends WithTranslation {
  selectedValues: string[];
  handleFilterChange: (value: string) => void;
}

const ColorsFilter: FC<ColorsFilterProps> = ({ selectedValues, handleFilterChange, t }) => {
  const { data, loading, error } = useColorsQuery();

  if (error) return <Error message={t("content.filter.colors.error", { message: error.message })!} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} width={"100%"} />;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"}>{t("content.filter.colors.label")}</Text>
      <ColorCheckboxGroup
        options={data.colors.nodes}
        selectedValues={selectedValues}
        onClick={handleFilterChange}
      />
    </Box>
  );
};

export default withTranslation(I18NS.Catalog)(ColorsFilter);
