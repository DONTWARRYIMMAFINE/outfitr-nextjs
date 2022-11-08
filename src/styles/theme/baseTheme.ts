import React                           from "react";
import { createTheme, ThemeOptions }   from "@mui/material/styles";
import { Open_Sans, Playfair_Display } from "@next/font/google";
import { pxToRem }                     from "../../utility/pxToRem";


export const openSans = Open_Sans({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["cyrillic", "latin"],
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const playfairDisplay = Playfair_Display({
    weight: ["700"],
    subsets: ["cyrillic", "latin"],
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

declare module "@mui/material/styles" {
    interface TypographyVariants {
        logo: React.CSSProperties;
        description: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        logo?: React.CSSProperties;
        description?: React.CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        logo: true;
        description: true;
    }
}

const baseTheme = createTheme({
    palette: {
        primary: {
            main: "#2cb9b0"
        },
    },
    typography: (palette) => ({
        fontFamily: [
            openSans.style.fontFamily,
            playfairDisplay.style.fontFamily
        ].join(","),
        logo: {
            fontFamily: playfairDisplay.style.fontFamily,
            fontWeight: 700,
            fontSize: "xxx-large",
            color: palette.text.primary,
        },
        title1: {
            fontFamily: playfairDisplay.style.fontFamily,
            fontWeight: 700,
            fontSize: "xxx-large",
            color: palette.text.primary,
        },
        subtitle2: {
            fontFamily: openSans.style.fontFamily,
            fontWeight: 600,
            fontSize: "large",
            color: palette.text.primary,
        },
        description: {
            fontFamily: openSans.style.fontFamily,
            fontWeight: 400,
            fontSize: "medium",
            color: palette.text.primary,
            opacity: 0.7
        }
    }),
    shape: {
        borderRadius: 60
    },
    transitions: {
        easing: {
            // This is the most common easing curve.
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            // Objects enter the screen at full velocity from off-screen and
            // slowly decelerate to a resting point.
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            // Objects leave the screen at full velocity. They do not decelerate when off-screen.
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            // The sharp curve is used by objects that may return to the screen at any time.
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        duration: {
            shortest: 50,
            shorter: 100,
            short: 150,
            // most basic recommended timing
            standard: 200,
            // this is to be used in complex animations
            complex: 250,
            // recommended when something is entering screen
            enteringScreen: 225,
            // recommended when something is leaving screen
            leavingScreen: 195,
        },
    },
} as ThemeOptions);

export default baseTheme;