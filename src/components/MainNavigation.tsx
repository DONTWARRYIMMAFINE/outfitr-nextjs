import { Box, useTheme } from "@mui/material";
import React      from "react";
import Link       from "./Link";


export interface Navigation {
    name: string;
    href: string;
    chosen: boolean;
}

export const navigation: Navigation[] = [
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
    const { spacing } = useTheme();

    return (
        <Box component={"nav"}>
            <Box display={"flex"} component={"ul"}>
                {navigation.map(({name, href, chosen}, index) => {
                    return (
                        <Box key={index} component={"li"} px={spacing(2)} py={spacing(2)}>
                            <Link chosen={chosen} href={href}>
                                {name}
                            </Link>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    );
}

export default MainNavigation;