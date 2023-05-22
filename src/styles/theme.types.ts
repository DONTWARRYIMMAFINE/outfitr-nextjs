import { SwitchPropsVariantOverrides } from "@mui/material/Switch";
import { OverridableStringUnion } from "@mui/types";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    advertising: CSSProperties;
    logo: CSSProperties;
    p: CSSProperties;
    small: CSSProperties;
    tiny: CSSProperties;
    nav: CSSProperties;
    price: CSSProperties;
  }

  interface TypographyVariantsOptions {
    advertising: CSSProperties;
    logo: CSSProperties;
    p: CSSProperties;
    small: CSSProperties;
    tiny: CSSProperties;
    nav: CSSProperties;
    price: CSSProperties;
  }

  interface TypeHeader {
    body: string;
    header: string;
    footer: string;
    component: string;
    missing: string;
    textField: string;
  }

  interface TypeBackground {
    body: string;
    header: string;
    footer: string;
    drawer: string;
    component: string;
    missing: string;
    textField: string;
  }

  interface TypeText {
    reversed: string;
    placeholder: string;
  }

  interface Easing {
    poof: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    advertising: true;
    logo: true;
    p: true;
    small: true;
    tiny: true;
    nav: true;
    price: true;
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
