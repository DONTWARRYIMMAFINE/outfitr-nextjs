import ColorSelectableButton from "@/components/common/ColorSelectableButton";
import { Box } from "@/components/ui";
import { ColorFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";

interface RoundedCheckboxGroupProps {
  options: ColorFragment[];
  selectedValues?: string[];
  onClick: (value: string) => void;
}

const ColorCheckboxGroup: FC<RoundedCheckboxGroupProps> = ({ options, selectedValues, onClick }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} gap={1}>
      {options.map(({ id, code, name, hex }) => {
        const selected = selectedValues ? selectedValues?.indexOf(code) > -1 : false;

        return (
          <ColorSelectableButton
            key={id}
            name={name}
            color={hex}
            selected={selected}
            onClick={() => onClick(code)}
          />
        );
      })}
    </Box>
  );
};

export default ColorCheckboxGroup;
