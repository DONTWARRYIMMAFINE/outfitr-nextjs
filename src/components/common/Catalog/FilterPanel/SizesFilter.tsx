"use client";

import CheckboxGroup from "@/components/common/CheckboxGroup";
import { Text } from "@/components/ui";
import { useSizesQuery } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import Box from "../../../ui/Box";

interface SizesFilterProps {
  selectedValues: string[];
  handleFilterChange: (value: string) => void;
}

const SizesFilter: FC<SizesFilterProps> = ({ selectedValues, handleFilterChange }) => {
  const { data, loading, error } = useSizesQuery();

  if (error) return <Box>Unable to fetch sizes</Box>;
  if (loading || !data) return <Box>Loading sizes</Box>;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"}>Sizes</Text>
      <CheckboxGroup
        options={data.sizes.nodes}
        selectedValues={selectedValues}
        onClick={handleFilterChange}
      />
    </Box>
  );
};

export default SizesFilter;
