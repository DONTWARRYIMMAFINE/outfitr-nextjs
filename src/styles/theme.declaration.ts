import { CSSProperties } from "react";


declare module "@mui/material/styles" {
    interface TypographyVariants {
        logo: CSSProperties;
        description: CSSProperties;
        button1: CSSProperties;
        button2: CSSProperties;
        navigation: CSSProperties;
    }

    interface TypographyVariantsOptions {
        logo?: CSSProperties;
        description?: CSSProperties;
        button1: CSSProperties;
        button2: CSSProperties;
        navigation?: CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        logo: true;
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

declare module "@mui/material/Switch" {
    interface SwitchPropsVariantOverrides {
        ios: true;
    }
}