import { createTheme }      from "@mui/material/styles";
import { baseThemeOptions } from "./baseTheme";


const darkTheme = createTheme({
    ...baseThemeOptions,
    palette: {
        mode: "dark",
        text: {
            primary: "#fdfbf8",
            secondary: "#0c0d34",
            placeholder: "#d0cdc9",
        },
        background: {
            body: "#1f1f1f",
            header: "#2a2a2a",
            footer: "#2a2a2a",
            component: "#3f3f3f",
            missing: "#d9d9d9"
        },
        ...baseThemeOptions.palette
    },
});

export default darkTheme;
