"use client";

import CheckboxGroup from "@/components/common/CheckboxGroup";
import { Text } from "@/components/ui";
import Box from "@/components/ui/Box";
import Error from "@/components/ui/Error";
import { useBrandsQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

export interface BrandsFilterProps extends WithTranslation {
  selectedValues: string[];
  handleFilterChange: (value: string) => void;
}

const BrandsFilter: FC<BrandsFilterProps> = ({ selectedValues, handleFilterChange, t }) => {
  const { data, loading, error } = useBrandsQuery();

  if (error) return <Error message={"Unable to fetch brands"} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} width={"100%"} />;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"}>{t("component.label.brands")}</Text>
      <CheckboxGroup
        options={data.brands.nodes}
        selectedValues={selectedValues}
        onClick={handleFilterChange}
      />
    </Box>
  );
};

export default withTranslation()(BrandsFilter);
