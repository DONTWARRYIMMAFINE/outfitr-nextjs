import { themeOptions } from "@/styles/theme.options";
import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { merge } from "lodash";

const lightTheme = createTheme(merge({
  palette: {
    mode: "light",
    text: {
      primary: "#0C0D34",
      secondary: "#FDFBF8",
      primary70: "#0C0D34B3",
      primary50: "#0C0D3480",
      placeholder: "#B9B9B9",
    },
    background: {
      body: "#FDFDFD",
      header: "#F2F2F2",
      footer: "#F2F2F2",
      drawer: "#F2F2F2",
      component: "#EAEAEA",
      missing: "#D9D9D9",
    },
  },
}, themeOptions));

export default responsiveFontSizes(lightTheme);
