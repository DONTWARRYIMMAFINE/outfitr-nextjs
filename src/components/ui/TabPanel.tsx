import { Box } from "@/components/ui";
import { BoxProps } from "@mui/material";

export interface TabPanelProps extends BoxProps {
  index: number;
  value: number;
}

const TabPanel = ({ index, value, children, ...props }: TabPanelProps) => {
  return (
    <Box
      role={"tabpanel"}
      hidden={index !== value}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={2}
      paddingX={16}
      {...props}
    >
      {value === index && children}
    </Box>
  );
};

export default TabPanel;
