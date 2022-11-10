import React                                    from "react";
import { Box, Container, IconButton, useTheme } from "@mui/material";
import Logo                                     from "../Logo";
import AccessAlarmsIcon                         from '@mui/icons-material/AccessAlarms';
import MainNavigation                           from "../MainNavigation";
import ThemeSwitch                              from "../ThemeSwitch";


const Header: React.FC = () => {
    const { spacing } = useTheme();

    return (
        <Box component={ "header" }>
            <Container>
                <Box display={ "flex" } justifyContent={ "space-between" } alignItems={ "center" } py={ 2 }>
                    <Logo/>
                    <MainNavigation/>
                    <ThemeSwitch/>
                    <Box display={ "flex" } alignItems={ "center" }>
                        <IconButton sx={ { marginX: spacing(1) } }>
                            <AccessAlarmsIcon/>
                        </IconButton>
                        <IconButton sx={ { marginX: spacing(1) } }>
                            <AccessAlarmsIcon/>
                        </IconButton>
                        <IconButton sx={ { marginX: spacing(1) } }>
                            <AccessAlarmsIcon/>
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Header;