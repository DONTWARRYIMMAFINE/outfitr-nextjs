import ColorSelectableButton from "@/components/common/ColorSelectableButton";
import { Box } from "@/components/ui";
import { ColorFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";

interface RoundedCheckboxGroupProps {
  options: ColorFragment[];
  selectedValues?: string[];
  onClick: (value: string) => void;
  field?: "id" | "code";
}

const ColorCheckboxGroup: FC<RoundedCheckboxGroupProps> = ({ options, selectedValues, onClick, field = "code" }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} gap={1}>
      {options.map(({ id, code, name, hex }) => {
        const value = field === "id" ? id : code;
        const selected = selectedValues ? selectedValues?.indexOf(value) > -1 : false;

        return (
          <ColorSelectableButton
            key={id}
            name={name}
            color={hex}
            selected={selected}
            onClick={() => onClick(value)}
          />
        );
      })}
    </Box>
  );
};

export default ColorCheckboxGroup;
