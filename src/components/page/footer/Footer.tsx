import React                           from "react";
import { Box, Container }              from "@mui/material";
import Logo                            from "../../common/Logo";
import SocialLinks                     from "./SocialLinks";
import InfoColumn, { InfoColumnProps } from "./InfoColumn";


const columns: InfoColumnProps[] = [
    {
        title: "My Account",
        links: [
            {
                href: "/signIn",
                name: "Sign In"
            },
            {
                href: "/signUp",
                name: "Register"
            },
            {
                href: "/account",
                name: "Account"
            },
        ]
    },
    {
        title: "My outfits",
        links: [
            {
                href: "/cart",
                name: "Shopping Cart"
            },
            {
                href: "/wishList",
                name: "Favorites"
            },
        ]
    },
    {
        title: "Shop",
        links: [
            {
                href: "/categories",
                name: "Outfits"
            },
            {
                href: "/search",
                name: "Search"
            },
        ]
    },
    {
        title: "Legal Stuff",
        links: [
            {
                href: "/shippingAndDelivery",
                name: "Shipping & Delivery"
            },
            {
                href: "/termsAndConditions",
                name: "Terms & Conditions"
            },
            {
                href: "/privacyAndPolicy",
                name: "Privacy & Policy"
            },
        ]
    },
]


const Footer: React.FC = () => {
    return (
        <Box component={ "footer" }>
            <Container>
                <Box display={ "flex" } justifyContent={ "space-between" } alignItems={ "flex-start" } paddingY={ 8 }>
                    <Box>
                        <Logo/>
                        <SocialLinks/>
                    </Box>
                    { columns.map((column, index) => (
                        <InfoColumn key={ index } { ...column }/>
                    )) }
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;