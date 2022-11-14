import { OverridableStringUnion }      from "@mui/types";
import { CSSProperties }               from "react";
import { LinkProps as MuiLinkProps }   from "@mui/material/Link/Link";
import { SwitchPropsVariantOverrides } from "@mui/material/Switch";


declare module "@mui/material/styles" {
    interface TypographyVariants {
        logo: CSSProperties;
        title1: CSSProperties;
        lightSmall: CSSProperties;
        normalSmall: CSSProperties;
        description: CSSProperties;
        button1: CSSProperties;
        button2: CSSProperties;
        navigation: CSSProperties;
    }

    interface TypographyVariantsOptions {
        logo?: CSSProperties;
        title1?: CSSProperties;
        lightSmall?: CSSProperties;
        normalSmall?: CSSProperties;
        description?: CSSProperties;
        button1: CSSProperties;
        button2: CSSProperties;
        navigation?: CSSProperties;
    }

    interface TypeBackground {
        body: string;
        header: string;
        footer: string;
        component: string;
        missing: string;
    }

    interface TypeText {
        placeholder: string;
    }

    interface Easing {
        poof: string;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        logo: true;
        title1: true;
        lightSmall: true;
        normalSmall: true;
        description: true;
        button1: true;
        button2: true;
        navigation: true;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        regular: true;
        transparent: true;
    }
}

declare module "@mui/material/TextField" {
    interface TextFieldPropsVariantOverrides {
        flat: true;
    }
}

declare module "@mui/material/Switch" {
    interface CustomSwitchProps {
        variant?: OverridableStringUnion<'text' | 'outlined' | 'contained',
            SwitchPropsVariantOverrides>;
    }

    interface SwitchProps extends CustomSwitchProps {}

    interface SwitchPropsVariantOverrides {
        mode: true;
    }
}

declare module "@mui/material/Link" {
    // @ts-ignore
    interface LinkProps extends MuiLinkProps {
        selected?: boolean;
        showUnderline?: boolean;
    }

    interface LinkPropsVariantOverrides {
        navigation: true;
    }
}