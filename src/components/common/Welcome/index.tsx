import { Box, Button, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import { Categories } from "@/lib/graphql/schema.generated";
import { useTranslation } from "@/lib/i18n";
import { LngProps } from "@/lib/types/params.type";
import Image from "next/image";
import { Trans } from "react-i18next/TransWithoutContext";

interface WelcomeProps extends LngProps {}

const Welcome = async ({ lng }: WelcomeProps) => {
  const { t } = await useTranslation(lng, I18NS.Home);

  return (
    <Box
      display={"flex"}
      flex={1}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"relative"}
      flexDirection={{ md: "row", xs: "column-reverse" }}
      height={"90vh"}
    >
      <Box
        flexBasis={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={6}
          padding={{ md: 8, xs: 2 }}
        >
          <Text variant={"h1"} component={"h3"}>
            <Trans i18nKey={"welcome.title"} t={t} components={{ br: <br /> }} />
          </Text>
          <Text variant={"h4"} paragraph>
            {t("welcome.description")}
          </Text>
          <Button variant={"primary"} href={`${Routes.Catalog.href}/${Categories.Women}`}>
            {t("welcome.button.text")}
          </Button>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexBasis={"50%"}
        minWidth={{ md: "auto", xs: "100%" }}
        height={"100%"}
        flexGrow={1}
        position={"relative"}
        paddingX={{ md: 8, xs: 0 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          priority
          src={"/assets/pattern.png"}
          alt={"Oops"}
          style={{ objectFit: "contain" }}
          fill
        />
      </Box>
    </Box>
  );
};

export default Welcome;
