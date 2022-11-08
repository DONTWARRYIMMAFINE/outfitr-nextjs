import { Box, Typography } from "@mui/material";
import React               from "react";
import LogoText            from "./text/logo/LogoText";


const Logo: React.FC = () => {
    return (
        <Box display={"flex"}>
            <Typography variant={"logo"}>Outfitr</Typography>
            <Typography variant={"logo"} color={"primary"}>.</Typography>
        </Box>
    )
}

export default Logo;