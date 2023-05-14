import { Logo } from "@/components/common";
import LanguageSelector from "@/components/common/LanguageSelector";
import { Box, Container, Grid, Text } from "@/components/ui";
import { useTranslation } from "@/lib/i18n";
import { LngProps } from "@/lib/types/params.type";
import Copyright from "./Copyright";
import FooterInfoColumn, { InfoColumnProps } from "./FooterInfoColumn";
import FooterSocialLinks from "./FooterSocialLinks";

const columns: InfoColumnProps[] = [
  {
    title: "Account",
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
    title: "Outfits",
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

interface FooterProps extends LngProps {
  pathname?: string;
}

const Footer = ({ lng }: FooterProps) => {
  return (
    <Box component={"footer"} paddingY={4} sx={{ mt: "auto" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Logo />
          </Grid>
          <Grid container item xs={12} columnSpacing={4}>
            <Grid container item md={6} xs={12} spacing={2}>
              <Grid item xs={12}>
                <FooterSocialLinks />
              </Grid>
              <Grid item xs={12}>
                <Text variant={"small"} paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolor doloremque ea facilis harum itaque minus sapiente. Architecto ducimus quibusdam quidem sint
                  totam. Atque illo iure reiciendis, reprehenderit totam ut!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, at corporis debitis doloremque dolores explicabo ipsa laborum laudantium libero mollitia nulla omnis
                  provident quis quo reiciendis sed tempore tenetur voluptatibus?
                </Text>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid container item xs={12}>
                {columns.map((column, index) => (
                  <Grid key={index} item xs={3} gap={2}>
                    <FooterInfoColumn {...column} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={6}>
              {/* @ts-expect-error Server Component */}
              <Copyright lng={lng} />
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"flex-end"}>
              <LanguageSelector lng={lng} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
