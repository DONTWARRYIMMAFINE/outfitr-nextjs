import { themeOptions } from "@/styles/theme.options";
import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { merge } from "lodash";

const darkTheme = createTheme(merge({
  palette: {
    mode: "dark",
    text: {
      primary: "#FDFBF8",
      secondary: "#F2F2F2",
      reversed: "#0C0D34",
      placeholder: "#D0CDC9",
    },
    background: {
      body: "#1F1F1F",
      header: "#2A2A2A",
      container: "#2A2A2A",
      footer: "#2A2A2A",
      drawer: "#1F1F1F",
      component: "#3F3F3F",
      missing: "#D9D9D9",
      textField: "#242424",
    },
  },
}, themeOptions));

export default responsiveFontSizes(darkTheme);
