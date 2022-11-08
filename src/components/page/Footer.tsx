import { DescriptionRounded }       from "@mui/icons-material";
import React                                    from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import DescriptionText                          from "../text/DescriptionText";
import MediumText                   from "../text/medium/MediumText";
import BoldMediumText               from "../text/medium/BoldMediumText";
import Logo                         from "../Logo";
import InstagramIcon                from '@mui/icons-material/Instagram';
import FacebookIcon                 from '@mui/icons-material/Facebook';
import TwitterIcon                  from '@mui/icons-material/Twitter';
import SmallText                    from "../text/small/SmallText";


const Footer: React.FC = () => {
    const { shape, spacing } = useTheme();

    return (
        <Box bgcolor={"background.paper"} sx={{ borderTopLeftRadius: shape.borderRadius, borderTopRightRadius: shape.borderRadius }} component={"footer"}>
            <Container>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"flex-start"} py={spacing(3)}>
                    <Box>
                        <Logo/>
                        <InstagramIcon/>
                        <FacebookIcon/>
                        <TwitterIcon/>
                    </Box>
                    <Box>
                        <BoldMediumText py={spacing(2)}>My Account</BoldMediumText>
                        <MediumText py={spacing(1 / 2)}>Sign In</MediumText>
                        <MediumText py={spacing(1 / 2)}>Sign Up</MediumText>
                        <MediumText py={spacing(1 / 2)}>Settings</MediumText>
                    </Box>
                    <Box>
                        <BoldMediumText py={spacing(2)}>My outfits</BoldMediumText>
                        <MediumText py={spacing(1 / 2)}>Shopping cart</MediumText>
                        <MediumText py={spacing(1 / 2)}>Favourites</MediumText>
                    </Box>
                    <Box>
                        <BoldMediumText py={spacing(2)}>Shop</BoldMediumText>
                        <MediumText py={spacing(1 / 2)}>Outfits</MediumText>
                        <MediumText py={spacing(1 / 2)}>Search</MediumText>
                    </Box>
                    <Box>
                        <BoldMediumText py={spacing(2)}>Legal Stuff</BoldMediumText>
                        <MediumText py={spacing(1 / 2)}>Shopping & Delivery</MediumText>
                        <MediumText py={spacing(1 / 2)}>Terms & Conditions</MediumText>
                        <MediumText py={spacing(1 / 2)}>Privacy & Policy</MediumText>
                        <SmallText py={spacing(1 / 2)}>Privacy & Policy</SmallText>
                        <DescriptionText py={spacing(1 / 2)}>Terms & Conditions</DescriptionText>
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