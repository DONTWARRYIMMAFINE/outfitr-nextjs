import { Box }       from "@mui/material";
import React         from "react";
import MainTitleText from "./text/MainTitleText";


const Logo: React.FC = () => {
    return (
        <Box display={ "flex" }>
            <MainTitleText>Outfitr</MainTitleText>
            <MainTitleText color={ "primary" }>.</MainTitleText>
        </Box>
    )
}

export default Logo;