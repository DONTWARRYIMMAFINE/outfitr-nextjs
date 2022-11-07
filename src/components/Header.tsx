import React                                    from "react";
import { Box, Container, IconButton, useTheme } from "@mui/material";
import Logo                                     from "./Logo";
import AccessAlarmsIcon                         from '@mui/icons-material/AccessAlarms';
import ThemeSwitch                              from "./ThemeSwitch";


const Header: React.FC = () => {
    const { palette, shape, spacing } = useTheme();

    return (
        <Box bgcolor={ palette.background.paper } sx={ { borderBottomLeftRadius: shape.borderRadius, borderBottomRightRadius: shape.borderRadius } }>
            <Container maxWidth={ "xl" }>
                <Box display={ "flex" } justifyContent={ "space-between" } alignItems={ "center" } py={ spacing(2) }>
                    <Logo/>
                    {/*<MainNavigation/>*/ }
                    <ThemeSwitch/>
                    <Box display={ "flex" } alignItems={ "center" }>
                        <IconButton aria-label="delete" sx={ { color: palette.text.primary, bgcolor: palette.background.default, marginX: spacing(1) } }>
                            <AccessAlarmsIcon/>
                        </IconButton>
                        <IconButton aria-label="delete" sx={ { color: palette.text.primary, bgcolor: palette.background.default, marginX: spacing(1) } }>
                            <AccessAlarmsIcon/>
                        </IconButton>
                        <IconButton aria-label="delete" sx={ { color: palette.text.primary, bgcolor: palette.background.default, marginX: spacing(1) } }>
                            <AccessAlarmsIcon/>
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Header;