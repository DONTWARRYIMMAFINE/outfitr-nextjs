"use client";

import { Text, Box } from "@/components/ui";
import { Slider, SliderProps } from "@mui/material";
import { FC, useMemo } from "react";

export interface PriceRangeSliderProps extends SliderProps {
  value: number[];
  handleChange: (values: number[]) => void;
  currency?: string;
  lng?: string;
}

const PriceRangeSlider: FC<PriceRangeSliderProps> = ({ value, handleChange, currency = "BYN", lng }) => {
  const currencyFormatter = useMemo(() => new Intl.NumberFormat(lng, {
    style: "currency",
    currency,
  }), [currency, lng]);

  return (
    <Box gap={1}>
      <Slider
        value={value}
        onChange={(event, value, activeThumb) => handleChange(value as number[])}
        valueLabelDisplay={"off"}
      />
      <Box display={"flex"} justifyContent={"space-between"}>
        <Text variant={"price"}>{currencyFormatter.format(value[0])}</Text>
        <Text variant={"price"}>{currencyFormatter.format(value[1])}</Text>
      </Box>
    </Box>
  );
};

export default PriceRangeSlider;
