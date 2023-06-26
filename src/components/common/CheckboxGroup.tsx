import { Box, Button } from "@/components/ui";
import { FC } from "react";

interface CheckboxGroupItem {
  id: string;
  code: string;
  name: string;
}

export interface CheckboxGroupProps {
  field: keyof CheckboxGroupItem;
  options: CheckboxGroupItem[];
  selectedValues?: string[];
  onClick: (value: string) => void;
}

const CheckboxGroup: FC<CheckboxGroupProps> = ({ field, options, selectedValues, onClick }) => {
  return (
    <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={1}>
      {options.map(item => {
        const selected = selectedValues ? selectedValues?.indexOf(item[field]) > -1 : false;

        return (
          <Button
            key={item.id}
            variant={"outlined"}
            selected={selected}
            size={"small"}
            onClick={() => onClick(item[field])}
          >
            {item.name}
          </Button>
        );
      })}
    </Box>
  );
};

export default CheckboxGroup;
