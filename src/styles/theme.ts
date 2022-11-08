import { experimental_extendTheme }    from "@mui/material";
import { Open_Sans, Playfair_Display } from "@next/font/google";
import { pxToRem }                     from "../utility/pxToRem";


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

const theme = experimental_extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#2cb9b0",
                    light: "#74eee5"
                },
                text: {
                    primary: "#0c0d34",
                    secondary: "#fdfbf8",
                },
                background: {
                    default: "#f6f6f6",
                    paper: "#fdfdfd"
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: "#2cb9b0",
                    light: "#74eee5"
                },
                text: {
                    primary: "#fdfbf8",
                    secondary: "#0c0d34",
                },
                background: {
                    default: "#1f1f1f",
                    paper: "#2a2a2a",
                },
            },
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
        },
        title1: {
            fontFamily: playfairDisplay.style.fontFamily,
            fontWeight: 700,
            fontSize: "xxx-large",
        },
        subtitle2: {
            fontFamily: openSans.style.fontFamily,
            fontWeight: 600,
            fontSize: "large",
        },
        description: {
            fontFamily: openSans.style.fontFamily,
            fontWeight: 400,
            fontSize: "medium",
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
            color: palette.primary.main,
        }
    }),
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: "xl",
                sx: { flex: 1 }
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
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
            },
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: "regular" },
                    style: ({ theme }) => ({
                        textTransform: "none",
                        paddingTop: pxToRem(10),
                        paddingBottom: pxToRem(10),
                        paddingLeft: pxToRem(25),
                        paddingRight: pxToRem(25),
                        backgroundColor: theme.palette.primary.main,
                        ":hover": {
                            backgroundColor: theme.palette.primary.light,
                        }
                    }),
                },
                {
                    props: { variant: "transparent" },
                    style: ({ theme }) => ({
                        textTransform: "none",
                        paddingTop: pxToRem(10),
                        paddingBottom: pxToRem(10),
                        paddingLeft: pxToRem(25),
                        paddingRight: pxToRem(25),
                    }),
                },
            ],
        }
    },
    shape: {
        borderRadius: 60
    },
});

export default theme;