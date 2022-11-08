import { TypographyProps } from "@mui/material";
import React               from "react";
import MediumText          from "./medium/MediumText";

const DescriptionText: React.FC<TypographyProps> = ({ children, ...rest }) => {
    return <MediumText sx={{ opacity: "70%" }} {...rest}>{children}</MediumText>
}

export default DescriptionText;