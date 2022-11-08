import React                           from "react";
import { Typography, TypographyProps } from "@mui/material";


const TopicTitleText: React.FC<TypographyProps> = ({ children, ...rest }) => {
    return (
        <Typography fontWeight={ 600 } fontSize={ "x-large" } { ...rest }>
            { children }
        </Typography>
    )
}

export default TopicTitleText;