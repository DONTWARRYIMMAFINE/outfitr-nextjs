import React                                      from "react";
import { Box }                                    from "@mui/system";
import { Instagram, Facebook, Twitter, Telegram } from "@mui/icons-material";
import { IconButton }                             from "@mui/material";


interface Navigation {
    icon: React.ReactNode;
    href: string;
}

const navigation: Navigation[] = [
    {
        icon: <Instagram/>,
        href: "https://www.instagram.com/",
    },
    {
        icon: <Instagram/>,
        href: "https://vk.com/",
    },
    {
        icon: <Telegram/>,
        href: "https://web.telegram.org/",
    },
    {
        icon: <Facebook/>,
        href: "https://www.facebook.com/",
    },
    {
        icon: <Twitter/>,
        href: "https://twitter.com/",
    },
]

const SocialLinks: React.FC = () => {
    return (
        <Box display={ "flex" } justifyContent={ "center" }>
            { navigation.map(({ icon, href }, index) => {
                return (
                    <IconButton key={ index } href={ href } sx={ { width: 36, height: 36, backgroundColor: "transparent"} }>
                        { icon }
                    </IconButton>
                )
            }) }
        </Box>
    )
}

export default SocialLinks;