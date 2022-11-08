import { CSSProperties }       from "react";
import { PaletteColorOptions } from "@mui/material";

import { Theme as MuiTheme } from '@mui/material/styles';


declare module "@mui/material/styles" {
    interface Theme {
        vars: Omit<MuiTheme,
            'typography' | 'mixins' | 'breakpoints' | 'direction' | 'transitions'>;
    }
}

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
        logo: CSSProperties;
        description: CSSProperties;
        button1: CSSProperties;
        button2: CSSProperties;
    }

    interface TypographyVariantsOptions {
        logo?: CSSProperties;
        description?: CSSProperties;
        button1: CSSProperties;
        button2: CSSProperties;
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
        transparent: true;
    }
}