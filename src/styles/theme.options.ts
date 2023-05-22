import { ThemeOptions } from "@mui/material/styles";
import { Open_Sans, Playfair_Display } from "next/font/google";

export const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["cyrillic", "latin"],
  fallback: ["sans-serif"],
});

export const playfairDisplay = Playfair_Display({
  weight: ["700"],
  subsets: ["cyrillic", "latin"],
  fallback: ["sans-serif"],
});

export const themeOptions: ThemeOptions = {
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: "#2CB9B0",
      light: "rgba(44,185,176,0.7)",
      contrastText: "#FDFBF8",
    },
  },
  typography: (palette) => ({
    fontFamily: [
      openSans.style.fontFamily,
      playfairDisplay.style.fontFamily,
    ].join(","),
    advertising: {
      fontFamily: playfairDisplay.style.fontFamily,
      fontWeight: 700,
      fontSize: 148,
      lineHeight: 1,
      color: palette.primary.contrastText,
    },
    logo: {
      fontFamily: playfairDisplay.style.fontFamily,
      fontWeight: 700,
      fontSize: 48,
    },
    h1: {
      fontFamily: playfairDisplay.style.fontFamily,
      fontWeight: 700,
      fontSize: 48,
    },
    h2: {
      fontWeight: 400,
      fontSize: 27,
    },
    h3: {
      fontWeight: 400,
      fontSize: 24,
    },
    h4: {
      fontWeight: 400,
      fontSize: 21,
    },
    p: {
      fontWeight: 400,
      fontSize: 18,
    },
    price: {
      fontWeight: 500,
      fontSize: 16,
    },
    small: {
      fontWeight: 400,
      fontSize: 15,
    },
    tiny: {
      fontWeight: 600,
      fontSize: 10,
    },
    button: {
      fontWeight: 600,
      fontSize: 16,
      textTransform: "none",
      color: palette.text.primary,
    },
    nav: {
      fontWeight: 400,
      fontSize: "medium",
    },
  }),
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        html: {
          height: "100%",
        },
        body: {
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          backgroundColor: theme.palette.background.body,
        },
        "div[data-nextjs-scroll-focus-boundary]": {
          flex: 1,
        },
        ul: {
          listStyle: "none",
          padding: 0,
          margin: 0,
        },
        li: {
          listStyle: "none",
          padding: 0,
          margin: 0,
        },
        header: {
          backgroundColor: theme.palette.background.header,
          borderBottomLeftRadius: theme.shape.borderRadius,
          borderBottomRightRadius: theme.shape.borderRadius,
        },
        footer: {
          backgroundColor: theme.palette.background.footer,
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
        },
      }),
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
          },
        }),
        track: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.component,
          opacity: 1,
        }),
        thumb: ({ ownerState }) => ({
          boxShadow: "none",
          ...(ownerState.size === "medium") && {
            height: 24,
            width: 24,
          },
        }),
        switchBase: ({ ownerState }) => ({
          ...(ownerState.size === "medium") && {
            padding: "11px",
          },
        }),
      },
      variants: [
        {
          props: { variant: "mode" },
          style: ({ theme }) => ({
            "& .MuiSwitch-switchBase": {
              "&.Mui-checked": {
                "& + .MuiSwitch-track": {
                  backgroundColor: theme.palette.background.component,
                  opacity: 1,
                },
              },

            },
          }),
        },
      ],
    },
  },
  shape: {
    borderRadius: 64,
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      poof: "cubic-bezier(0.47, 1.64, 0.41, 0.8)",
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
};
