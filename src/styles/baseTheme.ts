import { ThemeOptions }   from "@mui/material/styles";
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

export const baseThemeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: "#2cb9b0",
            contrastText: "#fdfbf8"
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
        subtitle1: {
            fontWeight: 400,
            fontSize: "x-large",
        },
        subtitle2: {
            fontWeight: 600,
            fontSize: "large",
        },
        description: {
            fontWeight: 400,
            fontSize: "medium",
            opacity: 0.7
        },
        button1: {
            fontWeight: 600,
            fontSize: "medium",
            color: palette.primary.contrastText,
        },
        button2: {
            fontWeight: 600,
            fontSize: "medium",
            color: palette.primary.main,
        },
        navigation: {
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
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    backgroundColor: theme.palette.background.body,
                },
                "div[data-nextjs-scroll-focus-boundary]": {
                    flex: 1
                },
                ul: {
                    listStyle: "none",
                    padding: 0,
                    margin: 0
                },
                li: {
                    listStyle: "none",
                    padding: 0,
                    margin: 8
                },
                header: {
                    backgroundColor: theme.palette.background.header,
                    borderBottomLeftRadius: theme.shape.borderRadius,
                    borderBottomRightRadius: theme.shape.borderRadius
                },
                footer: {
                    backgroundColor: theme.palette.background.footer,
                    borderTopLeftRadius: theme.shape.borderRadius,
                    borderTopRightRadius: theme.shape.borderRadius
                },
            }),
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
        },
        MuiLink: {
            defaultProps: {
                textTransform: "none",
                underline: "none",
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
                },
            ]
        },
        MuiSwitch: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.size === "small") && {
                        padding: 1,
                    },
                    ...(ownerState.size === "medium") && {
                        padding: 6,
                        height: 46,
                        width: 66,
                    }
                }),
                track: ({ theme }) => ({
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.background.component,
                    opacity: 1
                }),
                thumb: ({ ownerState }) => ({
                    boxShadow: "none",
                    ...(ownerState.size === "medium") && {
                        height: 24,
                        width: 24,
                    }
                }),
                switchBase: ({ ownerState }) => ({
                    ...(ownerState.size === "medium") && {
                        padding: "11px",
                    }
                }),
            },
            variants: [
                {
                    props: { variant: "mode" },
                    style: ({ theme }) => ({
                        '& .MuiSwitch-switchBase': {
                            '&.Mui-checked': {
                                '& + .MuiSwitch-track': {
                                    backgroundColor: theme.palette.background.component,
                                    opacity: 1
                                },
                            },

                        },
                    })
                }
            ]
        },
        MuiIconButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.background.component,
                }),
            }
        },
        MuiTextField: {
            variants: [
                {
                    props: { variant: "outlined" },
                    style: ({ theme }) => ({
                        backgroundColor: theme.palette.background.header,
                        borderRadius: theme.shape.borderRadius,
                        label: {
                            color: theme.palette.text.placeholder,
                        }
                    })
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
            shortest: 100,
            shorter: 200,
            short: 300,
            standard: 350,
            complex: 450,
            enteringScreen: 225,
            leavingScreen: 195,
        },
    },
}