import { Box, Typography } from "@mui/material";
import React               from "react";


const Logo: React.FC = () => {
    return (
        <Box display={"flex"}>
            <Typography variant={"logo"}>Outfitr</Typography>
            <Typography variant={"logo"} color={"primary"}>.</Typography>
        </Box>
    )
}

export default Logo;