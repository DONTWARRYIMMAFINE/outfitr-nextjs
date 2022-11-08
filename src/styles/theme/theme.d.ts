import React                   from "react";
import { PaletteColorOptions } from "@mui/material";


declare module "@mui/material/styles" {
    interface CustomPalette {
        white?: PaletteColorOptions;
        black?: PaletteColorOptions;
    }

    interface Palette extends CustomPalette {}

    interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        white: true;
        black: true;
    }
}

declare module "@mui/material/styles" {
    interface TypographyVariants {
        logo: React.CSSProperties;
        description: React.CSSProperties;
        button1: React.CSSProperties;
        button2: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        logo?: React.CSSProperties;
        description?: React.CSSProperties;
        button1: React.CSSProperties;
        button2: React.CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        logo: true;
        description: true;
        button1: true;
        button2: true;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        regular: true;
    }
}