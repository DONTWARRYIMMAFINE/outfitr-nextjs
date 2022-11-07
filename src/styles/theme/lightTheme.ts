import { createTheme, ThemeOptions } from "@mui/material/styles";
import baseTheme                     from "./baseTheme";

const lightTheme = createTheme({
    ...baseTheme,
    palette: {
        ...baseTheme.palette,
        mode: "light",
        text: {
            primary: "#0c0d34",
            secondary: "#fdfbf8",
        },
        background: {
            default: "#fafafa",
            paper: "#fdfdfd"
        },
    },
} as ThemeOptions);

export default lightTheme;