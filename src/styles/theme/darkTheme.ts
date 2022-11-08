import { createTheme }      from "@mui/material/styles";
import { baseThemeOptions } from "./baseTheme";


const darkTheme = createTheme({
    ...baseThemeOptions,
    palette: {
        mode: "dark",
        text: {
            primary: "#fdfbf8",
            secondary: "#0c0d34",
        },
        background: {
            default: "#1f1f1f",
            paper: "#2a2a2a",
        },
        ...baseThemeOptions.palette
    },
});

export default darkTheme;
