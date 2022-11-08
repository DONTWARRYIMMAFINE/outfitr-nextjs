import React                           from "react";
import { Typography, TypographyProps } from "@mui/material";


const BoldMediumText: React.FC<TypographyProps> = ({ children, ...rest }) => {
    return <Typography fontWeight={ 600 } fontSize={ "medium" } { ...rest }>{ children }</Typography>
}

export default BoldMediumText;