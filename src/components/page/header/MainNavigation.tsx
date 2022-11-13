import { Box } from "@mui/material";
import React from "react";
import Link  from "../../common/Link";


interface Navigation {
    name: string;
    href: string;
    chosen: boolean;
}

const navigation: Navigation[] = [
    {
        name: "Home",
        href: "/",
        chosen: true
    },
    {
        name: "Outfits",
        href: "/category",
        chosen: false
    },
    {
        name: "About",
        href: "/about",
        chosen: false
    },
    {
        name: "Contact Us",
        href: "/contact",
        chosen: false
    }
]

const MainNavigation: React.FC = () => {
    return (
        <Box component={ "nav" }>
            <Box display={ "flex" } component={ "ul" } justifyContent={"center"}>
                { navigation.map(({ name, href, chosen }, index) => {
                    return (
                        <Box key={ index } component={ "li" }>
                            <Link variant={ "navigation" } type={ chosen ? "selected" : undefined } href={ href }>
                                { name }
                            </Link>
                        </Box>
                    )
                }) }
            </Box>
        </Box>
    );
}

export default MainNavigation;