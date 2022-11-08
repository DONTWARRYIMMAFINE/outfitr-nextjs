import { Typography, TypographyProps } from "@mui/material";
import React                           from "react";


const SmallText: React.FC<TypographyProps> = ({ children, ...rest }) => {
    return <Typography fontSize={"small"} color={"primary"} {...rest}>{children}</Typography>
}

export default SmallText;