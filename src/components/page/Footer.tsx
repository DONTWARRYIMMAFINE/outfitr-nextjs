import React                                    from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import Logo                                     from "../common/Logo";
import InstagramIcon                            from '@mui/icons-material/Instagram';
import FacebookIcon                 from '@mui/icons-material/Facebook';
import TwitterIcon                  from '@mui/icons-material/Twitter';


const Footer: React.FC = () => {
    const { spacing } = useTheme();

    return (
        <Box component={"footer"}>
            <Container>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"flex-start"} py={spacing(3)}>
                    <Box>
                        <Logo/>
                        <InstagramIcon/>
                        <FacebookIcon/>
                        <TwitterIcon/>
                    </Box>
                    <Box>
                        <Typography variant={"description"}>
                            Hating the clothes in your wardrobe? Explore hundreds of outfit ideas
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;