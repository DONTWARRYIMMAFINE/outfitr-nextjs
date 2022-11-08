import React                           from "react";
import { Typography, TypographyProps } from "@mui/material";
import { playfairDisplay }             from "../../../styles/theme/baseTheme";


const LogoText: React.FC<TypographyProps> = ({ children, ...rest }) => {
    return <Typography fontFamily={ playfairDisplay.style.fontFamily } fontSize={ "xxx-large" } { ...rest }>{ children }</Typography>
}

export default LogoText;