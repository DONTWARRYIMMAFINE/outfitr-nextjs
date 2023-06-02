"use client";

import CheckboxGroup from "@/components/common/CheckboxGroup";
import { Text } from "@/components/ui";
import Error from "@/components/ui/Error";
import { useSizesQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import Box from "../../../ui/Box";

interface SizesFilterProps extends WithTranslation {
  selectedValues: string[];
  handleFilterChange: (value: string) => void;
}

const SizesFilter: FC<SizesFilterProps> = ({ selectedValues, handleFilterChange, t }) => {
  const { data, loading, error } = useSizesQuery();

  if (error) return <Error message={"Unable to fetch sizes"} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} width={"100%"} />;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"}>{t("component.label.sizes")}</Text>
      <CheckboxGroup
        options={data.sizes.nodes}
        selectedValues={selectedValues}
        onClick={handleFilterChange}
      />
    </Box>
  );
};

export default withTranslation()(SizesFilter);
