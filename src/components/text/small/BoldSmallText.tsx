import { Typography, TypographyProps } from "@mui/material";
import React                           from "react";


const BoldSmallText: React.FC<TypographyProps> = ({ children, ...rest }) => {
    return <Typography fontSize={"small"} fontWeight={600} color={"primary"} {...rest}>{children}</Typography>
}

export default BoldSmallText;