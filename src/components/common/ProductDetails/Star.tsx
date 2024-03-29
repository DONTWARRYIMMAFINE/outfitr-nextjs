import { Box, Icons } from "@/components/ui";
import { FC } from "react";

interface StarProps {
  size?: number;
  selected?: boolean;
  onClick?: () => void;
}

const Star: FC<StarProps> = ({ size = 24, selected, onClick }) => {
  return (
    <Box onClick={onClick}>
      {selected ? <Icons.StarFilled sx={{ width: size, height: size }} /> : <Icons.StarEmpty sx={{ width: size, height: size }} />}
    </Box>
  );
};

export default Star;
