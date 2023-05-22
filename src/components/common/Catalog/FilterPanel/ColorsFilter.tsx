"use client";

import ColorCheckboxGroup from "@/components/common/ColorCheckboxGroup";
import { Text } from "@/components/ui";
import { useColorsQuery } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import Box from "../../../ui/Box";

interface ColorsFilterProps {
  selectedValues: string[];
  handleFilterChange: (value: string) => void;
}

const ColorsFilter: FC<ColorsFilterProps> = ({ selectedValues, handleFilterChange }) => {
  const { data, loading, error } = useColorsQuery();

  if (error) {
    return <Box>Unable to fetch colors</Box>;
  }

  if (loading || !data) {
    return <Box>Loading colors</Box>;
  }

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"}>Colors</Text>
      <ColorCheckboxGroup
        options={data.colors.nodes}
        selectedValues={selectedValues}
        onClick={handleFilterChange}
      />
    </Box>
  );
};

export default ColorsFilter;
