import React                from "react";
import { Box, Container }   from "@mui/material";
import Logo                 from "../../common/Logo";
import ModeSwitch           from "../../common/ModeSwitch";
import IconButtonNavigation from "./IconButtonNavigation";
import MainNavigation       from "./MainNavigation";


const Header: React.FC = () => {
    return (
        <Box component={ "header" }>
            <Container>
                <Box display={ "flex" } justifyContent={ "space-between" } alignItems={ "center" } py={ 2 }>
                    <Logo/>
                    <MainNavigation/>
                    <Box display={ "flex" } alignItems={ "center" } justifyContent={ "space-between" }>
                        <ModeSwitch sx={ { marginRight: 5 } }/>
                        <IconButtonNavigation/>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Header;