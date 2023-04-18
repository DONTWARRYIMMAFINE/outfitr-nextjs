"use client";

import Copyright from "@/components/common/layout/footer/Copyright";
import TINSection from "@/components/common/layout/footer/TINSection";
import { Box, Container, Hidden } from "@/components/ui";
import { FC } from "react";
import Logo from "../../Logo";
import FooterInfoColumn, { InfoColumnProps } from "./FooterInfoColumn";
import FooterSocialLinks from "./FooterSocialLinks";

const columns: InfoColumnProps[] = [
  {
    title: "My Account",
    links: [
      {
        href: "/signIn",
        name: "Sign In",
      },
      {
        href: "/signUp",
        name: "Register",
      },
      {
        href: "/account",
        name: "Account",
      },
    ],
  },
  {
    title: "My outfits",
    links: [
      {
        href: "/cart",
        name: "Shopping Cart",
      },
      {
        href: "/wishList",
        name: "Favorites",
      },
    ],
  },
  {
    title: "Shop",
    links: [
      {
        href: "/categories",
        name: "Outfits",
      },
      {
        href: "/search",
        name: "Search",
      },
    ],
  },
  {
    title: "Legal Stuff",
    links: [
      {
        href: "/shippingAndDelivery",
        name: "Shipping & Delivery",
      },
      {
        href: "/termsAndConditions",
        name: "Terms & Conditions",
      },
      {
        href: "/privacyAndPolicy",
        name: "Privacy & Policy",
      },
    ],
  },
];

const Footer: FC = () => {
  return (
    <Box component={"footer"} paddingY={4} sx={{ mt: "auto" }}>
      <Container>
        <Logo />
        <Box display={"flex"}>
          <Box flexGrow={1} flexBasis={"35%"}>
            <FooterSocialLinks />
            <TINSection />
          </Box>
          <Hidden mdDown>
            <Box display={"flex"} flexGrow={1} flexShrink={0} justifyContent={"space-between"} alignItems={"flex-start"} paddingLeft={2}>
              {columns.map((column, index) => (
                <FooterInfoColumn key={index} {...column} />
              ))}
            </Box>
          </Hidden>
        </Box>
        <Hidden mdUp>
          <Box display={"flex"} flex={1} justifyContent={"space-between"} alignItems={"flex-start"}>
            {columns.map((column, index) => (
              <FooterInfoColumn key={index} {...column} />
            ))}
          </Box>
        </Hidden>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
