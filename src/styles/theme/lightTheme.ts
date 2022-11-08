import { createTheme }      from "@mui/material/styles";
import { baseThemeOptions } from "./baseTheme";


const lightTheme = createTheme({
    ...baseThemeOptions,
    palette: {
        mode: "light",
        text: {
            primary: "#0c0d34",
            secondary: "#fdfbf8",
        },
        background: {
            default: "#f6f6f6",
            paper: "#fdfdfd"
        },
        ...baseThemeOptions.palette
    },
});

export default lightTheme;