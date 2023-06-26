import { RoundedSelectableButton } from "@/components/common";
import { Box, Text } from "@/components/ui";
import { FC, MouseEventHandler } from "react";

interface ColorSelectableButtonProps {
  name: string;
  color: string;
  selected?: boolean;
  onClick?: MouseEventHandler | undefined;
}

const ColorSelectableButton: FC<ColorSelectableButtonProps> = ({ name, color, selected, onClick }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <RoundedSelectableButton
        innerRadius={18}
        outerRadius={22}
        selectedColor={color}
        unselectedColor={color}
        borderColor={"white"}
        border={selected}
        selected={selected}
        onClick={onClick}
      />
      <Text variant={"small"} opacity={0.5}>{name}</Text>
    </Box>
  );
};

export default ColorSelectableButton;
