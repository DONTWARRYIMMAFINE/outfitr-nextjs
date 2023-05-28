"use client";

import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC, forwardRef } from "react";

export type TextFieldProps = MuiTextFieldProps & {
  success?: boolean;
};

const StyledTextField: FC<TextFieldProps> = styled(MuiTextField)<TextFieldProps>(({ theme, variant, error, disabled }) => ({
  ...(variant === "outlined" && {
    label: {
      color: theme.palette.text.placeholder,
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: theme.palette.background.textField,
      ...(!disabled && {
        "&:hover fieldset": {
          borderColor: error ? theme.palette.error.light : theme.palette.primary.main,
          transition: theme.transitions.create(["border-color"]),
        },
      }),
      "&.Mui-focused fieldset": {
        borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
      },
    },
  }),
}));

const TextField = forwardRef<HTMLDivElement, TextFieldProps>(({ children, ...props }, ref) => {
  const theme = useTheme();

  return (
    <StyledTextField
      ref={ref}
      size={useMediaQuery(theme.breakpoints.up("md")) ? "medium" : "small"}
      {...props}
    >
      {children}
    </StyledTextField>
  );
});

TextField.displayName = "TextField";

export default TextField;
