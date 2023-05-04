"use client";

import { InputAdornment } from "@mui/material";
import { forwardRef, ReactNode } from "react";
import TextField, { TextFieldProps } from "./TextField";

export type IconTextFieldProps = TextFieldProps & {
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}

const IconTextField = forwardRef<HTMLDivElement, IconTextFieldProps>(({ iconStart, iconEnd, InputProps, children, ...props }, ref) => {
  return (
    <TextField
      ref={ref}
      InputProps={{
        startAdornment: iconStart ? (<InputAdornment position={"start"}>{iconStart}</InputAdornment>) : null,
        endAdornment: iconEnd ? (<InputAdornment position={"end"}>{iconEnd}</InputAdornment>) : null,
        ...InputProps,
      }}
      {...props}
    >
      {children}
    </TextField>
  );
});

IconTextField.displayName = "IconTextField";

export default IconTextField;
