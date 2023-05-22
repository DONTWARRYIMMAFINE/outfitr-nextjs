import { Box, IconButton, Icons } from "@/components/ui";
import { invertColor } from "@/lib/utils/invertColor";
import { MouseEventHandler, PropsWithChildren } from "react";

interface RoundedSelectableItemProps extends PropsWithChildren {
  innerRadius: number;
  outerRadius: number;
  selectedColor: string;
  unselectedColor: string;
  borderColor: string;
  border?: boolean;
  selected?: boolean;
  onClick?: MouseEventHandler | undefined;
}

const RoundedSelectableButton = (
  {
    innerRadius,
    outerRadius,
    selectedColor,
    unselectedColor,
    borderColor,
    border,
    selected,
    onClick,
  }: RoundedSelectableItemProps,
) => {
  return (
    <Box
      display={"flex"}
      width={outerRadius * 2}
      height={outerRadius * 2}
      justifyContent={"center"}
      alignItems={"center"}
      borderColor={borderColor}
      border={border ? 2 : 0}
      borderRadius={innerRadius}
      onClick={onClick}
    >
      <IconButton
        sx={{
          width: innerRadius * 2,
          height: innerRadius * 2,
          bgcolor: selected ? selectedColor : unselectedColor,
        }}
      >
        <Box hidden={!selected}>
          <Icons.Check
            sx={{
              width: innerRadius,
              height: innerRadius,
              color: invertColor(selectedColor, true),
            }}
          />
        </Box>
      </IconButton>
    </Box>
  );
};

export default RoundedSelectableButton;
