import React                        from "react";
import { Box, Container, useTheme } from "@mui/material";
import MediumText                   from "../text/MediumText";
import TopicTitleText               from "../text/TopicTitleText";
import Logo                         from "../Logo";
import InstagramIcon                from '@mui/icons-material/Instagram';
import FacebookIcon                 from '@mui/icons-material/Facebook';
import TwitterIcon                  from '@mui/icons-material/Twitter';


const Footer: React.FC = () => {
    const { palette, shape, spacing } = useTheme();

    return (
        <Box bgcolor={ palette.background.paper } sx={ { borderTopLeftRadius: shape.borderRadius, borderTopRightRadius: shape.borderRadius } } component={ "footer" }>
            <Container maxWidth={ "xl" }>
                <Box display={ "flex" } justifyContent={ "space-between" } alignItems={ "flex-start" } py={ spacing(3) }>
                    <Box>
                        <Logo/>
                        <InstagramIcon/>
                        <FacebookIcon/>
                        <TwitterIcon/>
                    </Box>
                    <Box>
                        <TopicTitleText py={ spacing(2) }>My Account</TopicTitleText>
                        <MediumText py={ spacing(1 / 2) }>Sign In</MediumText>
                        <MediumText py={ spacing(1 / 2) }>Sign Up</MediumText>
                        <MediumText py={ spacing(1 / 2) }>Settings</MediumText>
                    </Box>
                    <Box>
                        <TopicTitleText py={ spacing(2) }>My outfits</TopicTitleText>
                        <MediumText py={ spacing(1 / 2) }>Shopping cart</MediumText>
                        <MediumText py={ spacing(1 / 2) }>Favourites</MediumText>
                    </Box>
                    <Box>
                        <TopicTitleText py={ spacing(2) }>Shop</TopicTitleText>
                        <MediumText py={ spacing(1 / 2) }>Outfits</MediumText>
                        <MediumText py={ spacing(1 / 2) }>Search</MediumText>
                    </Box>
                    <Box>
                        <TopicTitleText py={ spacing(2) }>Legal Stuff</TopicTitleText>
                        <MediumText py={ spacing(1 / 2) }>Shopping & Delivery</MediumText>
                        <MediumText py={ spacing(1 / 2) }>Terms & Conditions</MediumText>
                        <MediumText py={ spacing(1 / 2) }>Privacy & Policy</MediumText>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;