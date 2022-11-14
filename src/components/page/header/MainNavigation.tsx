import { Box } from "@mui/material";
import React   from "react";
import Link    from "../../common/Link";


interface Navigation {
    name: string;
    href: string;
    selected: boolean;
}

const navigation: Navigation[] = [
    {
        name: "Home",
        href: "/",
        selected: true
    },
    {
        name: "Outfits",
        href: "/category",
        selected: false
    },
    {
        name: "About",
        href: "/about",
        selected: false
    },
    {
        name: "Contact Us",
        href: "/contact",
        selected: false
    }
]

const MainNavigation: React.FC = () => {
    return (
        <Box component={ "nav" }>
            <Box display={ "flex" } component={ "ul" } justifyContent={ "center" }>
                { navigation.map(({ name, href, selected }, index) => {
                    return (
                        <Box key={ index } component={ "li" } marginX={ 2 }>
                            <Link variant={ "navigation" } selected={ selected } href={ href } showUnderline>
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