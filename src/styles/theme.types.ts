import { SwitchPropsVariantOverrides } from "@mui/material/Switch";
import { OverridableStringUnion } from "@mui/types";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    logo: CSSProperties;
    p: CSSProperties;
    small: CSSProperties;
    nav: CSSProperties;
  }

  interface TypographyVariantsOptions {
    logo: CSSProperties;
    p: CSSProperties;
    small: CSSProperties;
    nav: CSSProperties;
  }

  interface TypeHeader {
    body: string;
    header: string;
    footer: string;
    component: string;
    missing: string;
  }

  interface TypeBackground {
    body: string;
    header: string;
    footer: string;
    drawer: string;
    component: string;
    missing: string;
  }

  interface TypeText {
    placeholder: string;
    primary70: string;
    primary50: string;
  }

  interface Easing {
    poof: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    logo: true;
    p: true;
    small: true;
    nav: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsVariantOverrides {
    flat: true;
  }
}

declare module "@mui/material/Switch" {
  interface CustomSwitchProps {
    variant?: OverridableStringUnion<"text" | "outlined" | "contained",
      SwitchPropsVariantOverrides>;
  }

  interface SwitchProps extends CustomSwitchProps {}

  interface SwitchPropsVariantOverrides {
    mode: true;
  }
}
