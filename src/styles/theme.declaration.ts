import { OverridableStringUnion }      from "@mui/types";
import { CSSProperties }               from "react";


declare module "@mui/material/styles" {
    interface TypographyVariants {
        logo: CSSProperties;
        title1: CSSProperties;
        description: CSSProperties;
        button1: CSSProperties;
        button2: CSSProperties;
        navigation: CSSProperties;
    }

    interface TypographyVariantsOptions {
        logo?: CSSProperties;
        title1?: CSSProperties;
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
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        logo: true;
        title1: true;
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

declare module "@mui/material/Link" {
    interface LinkPropsVariantOverrides {
        navigation: true;
    }
}

declare module "@mui/material/TextField" {
    interface TextFieldPropsVariantOverrides {
        flat: true;
    }
}

declare module "@mui/material/Switch" {
    interface CustomSwitchProps {
        variant?: OverridableStringUnion<
            'text' | 'outlined' | 'contained',
            SwitchPropsVariantOverrides
            >;
    }

    interface SwitchProps extends CustomSwitchProps {}

    interface SwitchPropsVariantOverrides {
        mode: true;
    }
}