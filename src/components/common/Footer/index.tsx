import { Logo } from "@/components/common";
import LanguageSelector from "@/components/common/LanguageSelector";
import { Box, Container, Grid, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes, RouteValue } from "@/constants/routes";
import { useTranslation } from "@/lib/i18n";
import { LngProps } from "@/lib/types/params.type";
import Copyright from "./Copyright";
import FooterInfoColumn, { InfoLink } from "./FooterInfoColumn";
import FooterSocialLinks from "./FooterSocialLinks";

interface LocalizedColumn {
  i18nKey: string;
  links: RouteValue[];
}

const columns: LocalizedColumn[] = [
  {
    i18nKey: "columns.account.label",
    links: [Routes.LogIn, Routes.SignUp],
  },
  {
    i18nKey: "columns.outfits.label",
    links: [Routes.Cart, Routes.Wishlist, Routes.Profile],
  },
  {
    i18nKey: "columns.shop.label",
    links: [Routes.Catalog, Routes.Contact, Routes.About],
  },
  {
    i18nKey: "columns.legalStuff.label",
    links: [Routes.ShippingAndDelivery, Routes.TermsAndConditions, Routes.PrivacyAndPolicy],
  },
];

interface FooterProps extends LngProps {
  pathname?: string;
}

const Footer = async ({ lng }: FooterProps) => {
  const { t } = await useTranslation(lng, I18NS.Footer);

  return (
    <Box component={"footer"} paddingY={4} sx={{ mt: "auto" }}>
      <Container>
        <Grid container spacing={2} paddingX={{ md: 8, xs: 3 }}>
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
                {columns.map((column, index) => {
                  const title = t(column.i18nKey);
                  const links: InfoLink[] = column.links.map(link => {
                    return {
                      title: link.title,
                      href: link.href,
                    };
                  });
                  return (
                    <Grid key={index} item xs={3} gap={2}>
                      <FooterInfoColumn title={title} links={links} />
                    </Grid>
                  );
                })}
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
