import { Grid2x1 } from "@/components/common/index";
import { Box, Button, Text, TextField } from "@/components/ui";
import { useTranslation } from "@/lib/i18n";
import { LngProps, TString } from "@/lib/types/params.type";
import Image from "next/image";
import { FC } from "react";
import { Trans } from "react-i18next/TransWithoutContext";

interface Block1Props {
  image: string;
}

const Block1: FC<Block1Props> = ({ image }) => {
  return (
    <Box position={{ md: "relative", xs: "absolute" }} width={"100%"} minHeight={"100%"} sx={{ opacity: { md: 1, xs: 0.2 } }}>
      <Image
        src={image}
        alt={""}
        style={{ objectFit: "cover" }}
        fill
      />
    </Box>
  );
};

interface Block2Props {
  title: TString;
  description: TString;
  button: {
    text: TString;
  };
}

const Block2: FC<Block2Props> = ({ title, description, button }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      padding={{ md: 8, xs: 2 }}
    >
      <Text variant={"h1"} component={"h2"}>{title}</Text>
      <Text variant={"subtitle1"}>{description}</Text>
      <TextField label="Email" variant="outlined" margin={"normal"} size={"small"} />
      <Box marginTop={2}>
        <Button variant={"primary"}>
          {button.text}
        </Button>
      </Box>
    </Box>
  );
};

export interface NewsProps extends LngProps {}

const News = async ({ lng }: NewsProps) => {
  const { t } = await useTranslation(lng, "news");

  return (
    <Grid2x1
      block1={<Block1 image={"/news.jpg"} />}
      block2={<Block2
        title={<Trans i18nKey={"title"} t={t} components={{ br: <br /> }} />}
        description={<Trans i18nKey={"description"} t={t} />}
        button={{ text: <Trans i18nKey={"button.text"} t={t} /> }}
      />}
    />
  );
};

export default News;
