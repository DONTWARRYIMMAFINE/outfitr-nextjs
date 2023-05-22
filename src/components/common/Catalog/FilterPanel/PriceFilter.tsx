import { Box, Text } from "@/components/ui";
import PriceRangeSlider from "@/components/common/PriceRangeSlider";
import { FC } from "react";

interface PriceFilterProps {
  value: number[];
  handleChange: (value: number[]) => void;
  currency?: string;
  lng?: string;
}

const PriceFilter: FC<PriceFilterProps> = ({ value, handleChange, currency = "BYN", lng }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"}>
      <Text variant={"p"}>Price Range</Text>
      <PriceRangeSlider value={value} handleChange={handleChange} currency={currency} lng={lng} />
    </Box>
  );
};

export default PriceFilter;
