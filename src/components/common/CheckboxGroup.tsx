import { Box, Button } from "@/components/ui";
import { FC } from "react";

interface CheckboxGroupItem {
  id: string;
  code: string;
  name: string;
}

interface CheckboxGroupProps {
  options: CheckboxGroupItem[];
  selectedValues?: string[];
  onClick: (value: string) => void;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({ options, selectedValues, onClick }) => {
  return (
    <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={1}>
      {options.map(({ id, code, name }) => {
        const selected = selectedValues ? selectedValues?.indexOf(code) > -1 : false;

        return (
          <Button
            key={id}
            variant={"outlined"}
            selected={selected}
            size={"small"}
            onClick={() => onClick(code)}
          >
            {name}
          </Button>
        );
      })}
    </Box>
  );
};

export default CheckboxGroup;
