import { PaletteColorOptions }         from "@mui/material";
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

export const baseThemeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: "#2cb9b0"
        },
        white: {
            main: "#fdfbf8"
        },
        black: {
            main: "#0c0d34"
        }
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
        },
        button1: {
            fontFamily: openSans.style.fontFamily,
            fontWeight: 600,
            fontSize: "medium",
            color: palette.text.secondary,
        },
        button2: {
            fontFamily: openSans.style.fontFamily,
            fontWeight: 600,
            fontSize: "medium",
            color: palette.text.primary,
        }
    }),
    components: {
        MuiCssBaseline: {
            styleOverrides: () => ({
                html: {
                    height: "100%"
                },
                body: {
                    height: "100%"
                },
                "#__next": {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%"
                }
            }),
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: "regular" },
                    style: {
                        textTransform: "none",
                        paddingTop: pxToRem(10),
                        paddingBottom: pxToRem(10),
                        paddingLeft: pxToRem(25),
                        paddingRight: pxToRem(25),
                        color: "white.main",
                        backgroundColor: "primary.main",
                        ":hover": {
                            backgroundColor: "primary.light",
                        }
                    },
                },
                // {
                //     props: { variant: "primary", color: "secondary" },
                //     style: {
                //         border: `4px dashed ${red[500]}`,
                //     },
                // },
            ]
        }
    },
    shape: {
        borderRadius: 60
    },
    transitions: {
        easing: {
            // This is the most common easing curve.
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            // Objects enter the screen at full velocity from off-screen and
            // slowly decelerate to a resting point.
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            // Objects leave the screen at full velocity. They do not decelerate when off-screen.
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
            // The sharp curve is used by objects that may return to the screen at any time.
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
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
}