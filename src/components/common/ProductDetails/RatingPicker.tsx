"use client";

import { Box } from "@/components/ui";
import { FC } from "react";
import Star from "./Star";

interface RatingPickerProps {
  rating: number;
  onChange: (value: number) => void;
}

const RatingPicker: FC<RatingPickerProps> = ({ rating, onChange }) => {
  return (
    <Box display={"flex"} padding={1} gap={1}>
      {[...Array(5)].map((item, i) => (
        <Star key={i} size={32} selected={i + 1 <= rating} onClick={() => onChange(i + 1)} />
      ))}
    </Box>
  );
};

export default RatingPicker;
