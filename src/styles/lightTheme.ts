import { createTheme }      from "@mui/material/styles";
import { baseThemeOptions } from "./baseTheme";


const lightTheme = createTheme({
    ...baseThemeOptions,
    palette: {
        mode: "light",
        text: {
            primary: "#0c0d34",
            secondary: "#fdfbf8",
            placeholder: "#b9b9b9",
        },
        background: {
            body: "#f6f6f6",
            header: "#fdfdfd",
            footer: "#fdfdfd",
            component: "#eaeaea",
            missing: "#d9d9d9"
        },
        ...baseThemeOptions.palette
    },
});

export default lightTheme;