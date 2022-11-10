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
        },
        navigation: {
            fontFamily: openSans.style.fontFamily,
            fontWeight: 400,
            fontSize: "medium",
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
            styleOverrides: (theme) => ({
                html: {
                    height: "100%"
                },
                body: {
                    height: "100%"
                },
                ul: {
                    listStyle: "none"
                },
                li: {
                    listStyle: "none"
                },
                header: {
                    backgroundColor: theme.palette.background.paper,
                    borderBottomLeftRadius: theme.shape.borderRadius,
                    borderBottomRightRadius: theme.shape.borderRadius
                },
                footer: {
                    backgroundColor: theme.palette.background.paper,
                    borderTopLeftRadius: theme.shape.borderRadius,
                    borderTopRightRadius: theme.shape.borderRadius
                },
                "#__next": {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%"
                }
            }),
        },
        MuiButton: {
            defaultProps: {
                sx: {
                    marginY: pxToRem(5),
                    marginX: pxToRem(10)
                }
            },
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
        },
        MuiLink: {
            defaultProps: {
                marginY: pxToRem(5),
                marginX: pxToRem(10)
            },
            variants: [
                {
                    props: { variant: "navigation" },
                    style: ({ theme }) => ({
                        textTransform: "none",
                        textDecoration: "none",
                        position: "relative",
                        paddingBottom: pxToRem(10),
                        color: theme.palette.text.primary,
                        transition: theme.transitions.create(["all"]),
                        ":hover": {
                            color: theme.palette.primary.main,
                            ":after": {
                                transform: "scaleX(1)"
                            }
                        },
                        ":after": {
                            content: '""',
                            position: "absolute",
                            width: "100%",
                            height: "2px",
                            bottom: 0,
                            left: 0,
                            transform: "scaleX(0)",
                            backgroundColor: theme.palette.primary.main,
                            transition: theme.transitions.create(["all"]),
                        },
                    }),
                },
                {
                    props: { variant: "navigation", type: "selected" },
                    style: ({ theme }) => ({
                        textTransform: "none",
                        textDecoration: "none",
                        position: "relative",
                        paddingBottom: pxToRem(10),
                        color: theme.palette.primary.main,
                        transition: theme.transitions.create(["all"]),
                        ":hover": {
                            ":after": {
                                transform: "scaleX(1)"
                            }
                        },
                        ":after": {
                            content: '""',
                            position: "absolute",
                            width: "100%",
                            height: "2px",
                            bottom: 0,
                            left: 0,
                            transform: "scaleX(0)",
                            backgroundColor: theme.palette.primary.main,
                            transition: theme.transitions.create(["all"]),
                        },
                    }),
                }
            ]
        }
    },
    shape: {
        borderRadius: 60
    },
    transitions: {
        easing: {
            easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
            easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
            easeIn: "cubic-bezier(0.4, 0, 1, 1)",
            sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
        },
        duration: {
            shortest: 50,
            shorter: 100,
            short: 150,
            standard: 200,
            complex: 250,
            enteringScreen: 225,
            leavingScreen: 195,
        },
    },
});

export default theme;