import React                           from "react";
import { Typography, TypographyProps } from "@mui/material";


const LogoText: React.FC<TypographyProps> = ({ children, ...rest }) => {
    return <Typography fontSize={ "xxx-large" } { ...rest }>{ children }</Typography>
}

export default LogoText;