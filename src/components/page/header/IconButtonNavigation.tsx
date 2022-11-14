import { FavoriteBorderOutlined, LocalMallOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import React                                                                from "react";
import { Box, IconButton }                                                  from "@mui/material";


interface Navigation {
    icon: React.ReactNode;
    href: string;
}

const navigation: Navigation[] = [
    {
        icon: <FavoriteBorderOutlined/>,
        href: "/wish-list",
    },
    {
        icon: <LocalMallOutlined/>,
        href: "/cart",
    },
    {
        icon: <PersonOutlineOutlined/>,
        href: "/account",
    },
]

const IconButtonNavigation: React.FC = () => {
    return (
        <Box component={ "nav" }>
            <Box display={ "flex" } component={ "ul" } justifyContent={ "center" }>
                { navigation.map(({ icon, href }, index) => {
                    return (
                        <Box key={ index } component={ "li" } marginX={ 1 }>
                            <IconButton href={ href }>
                                { icon }
                            </IconButton>
                        </Box>
                    )
                }) }
            </Box>
        </Box>
    )
}

export default IconButtonNavigation;