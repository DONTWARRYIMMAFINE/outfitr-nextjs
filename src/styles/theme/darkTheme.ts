import { createTheme, ThemeOptions } from "@mui/material/styles";
import baseTheme                     from "./baseTheme";


const darkTheme = createTheme({
    ...baseTheme,
    palette: {
        ...baseTheme.palette,
        mode: "dark",
        text: {
            primary: "#fdfbf8",
            secondary: "#0c0d34",
        },
        background: {
            default: "#1f1f1f",
            paper: "#2a2a2a",
        },
    },
} as ThemeOptions);

export default darkTheme;