"use client";

import CheckboxGroup from "@/components/common/CheckboxGroup";
import { Text } from "@/components/ui";
import Box from "@/components/ui/Box";
import { useBrandsQuery } from "@/lib/graphql/schema.generated";
import { FC } from "react";

export interface BrandsFilterProps {
  selectedValues: string[];
  handleFilterChange: (value: string) => void;
}

const BrandsFilter: FC<BrandsFilterProps> = ({ selectedValues, handleFilterChange }) => {
  const { data, loading, error } = useBrandsQuery();

  if (error) return <Box>Unable to fetch brands</Box>;
  if (loading || !data) return <Box>Loading brands</Box>;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"}>Brands</Text>
      <CheckboxGroup
        options={data.brands.nodes}
        selectedValues={selectedValues}
        onClick={handleFilterChange}
      />
    </Box>
  );
};

export default BrandsFilter;
