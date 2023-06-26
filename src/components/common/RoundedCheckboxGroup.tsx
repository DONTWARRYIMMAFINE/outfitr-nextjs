import { ColorSelectableButton } from "@/components/common";
import { Box } from "@/components/ui";
import { ColorFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";

export interface RoundedCheckboxGroupProps {
  field: keyof ColorFragment;
  options: ColorFragment[];
  selectedValues?: string[];
  onClick: (value: string) => void;
}

const RoundedCheckboxGroup: FC<RoundedCheckboxGroupProps> = ({ field, options, selectedValues, onClick }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} gap={1}>
      {options.map(color => {
        const selected = selectedValues ? selectedValues?.indexOf(color[field]!) > -1 : false;

        return (
          <ColorSelectableButton
            key={color.id}
            name={color.name}
            color={color.hex}
            selected={selected}
            onClick={() => onClick(color[field]!)}
          />
        );
      })}
    </Box>
  );
};

export default RoundedCheckboxGroup;
