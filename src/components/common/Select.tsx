"use client";

import { Box, Icons, MenuItem } from "@/components/ui";
import { Select as MuiSelect, SelectProps as MuiSelectProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ElementType, FC } from "react";

export interface SelectOption {
  value: string;
  label: string;
  IconComponent?: ElementType;
}

export interface SelectProps extends Omit<MuiSelectProps, "onChange" | "children"> {
  value?: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
}

const StyledSelect = styled(MuiSelect)(({ theme, variant }) => ({
  ...(variant === "outlined" && {
    transition: theme.transitions.create(["border-color"]),
    label: {
      color: theme.palette.text.placeholder,
    },
    "& 	.MuiSelect-outlined-root": {
      backgroundColor: theme.palette.background.textField,
      transition: theme.transitions.create(["border-color"]),
      "&.Mui-focused": {
        borderColor: theme.palette.primary.main,
      },
    },
  }),
}));

const Select: FC<SelectProps> = ({ value, options, onChange, ...props }) => {
  return (
    <StyledSelect
      disableUnderline
      MenuProps={{
        PaperProps: {
          sx: { borderRadius: 0.5, padding: 1 },
        },
      }}
      IconComponent={Icons.ExpandMore}
      value={value}
      onChange={e => onChange && onChange(e.target.value as string)}
      sx={{ bgcolor: "background.textField", mb: "auto" }}
      {...props}
    >
      {options.map(({ value, label, IconComponent }, index) => (
        <MenuItem key={index} value={value}>
          <Box display={"flex"} alignItems={"center"} gap={1}>
            {IconComponent && <IconComponent />}
            {label}
          </Box>
        </MenuItem>
      ))}
    </StyledSelect>
  );
};

export default Select;
