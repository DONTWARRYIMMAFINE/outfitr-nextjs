import PaymentMethodList from "@/components/common/Cart/Checkout/PaymentInfoStep/PaymentMethodList";
import ColorList from "@/components/common/ColorList";
import CountrySelect from "@/components/common/CountrySelect";
import Logo from "@/components/common/Logo";
import News from "@/components/common/News";
import { Box, Button, Link, Switch, Text } from "@/components/ui";
import ContentContainer from "@/components/ui/ContentContainer";
import TextField from "@/components/ui/TextField";
import { LngParamsProps } from "@/lib/types/params.type";
import React from "react";

export interface DemoPageProps extends LngParamsProps {}

const DemoPage = ({ params }: DemoPageProps) => {
  const { lng } = params;

  return (<>
    <ContentContainer pageTitle={"Demo"} disableBottomPadding>
      <Logo />
      <Text color={"primary"} variant="h4" component="h1" gutterBottom>
        MUI v5 + Next.js with TypeScript example
      </Text>
      <Button variant={"primary"}>
        <Text variant={"button"}>Shop now</Text>
      </Button>
      <Button variant={"transparent"}>
        <Text variant={"button"} color={"primary"}>Find your outfit</Text>
      </Button>
      <Switch />
      <Switch size={"small"} />
      <Link href={"/categories"} variant={"nav"} type={"selected"} showUnderline>
        Link component
      </Link>
      <Box display={"flex"} flexDirection={"column"}>
        <Text variant={"logo"}>LOGO</Text>
        <Text variant={"h1"}>h1</Text>
        <Text variant={"h2"}>h2</Text>
        <Text variant={"h3"}>h3</Text>
        <Text variant={"h4"}>h4</Text>
        <Text variant={"p"}>p</Text>
        <Text variant={"small"}>normalSmall</Text>
        <Text variant={"button"}>button1</Text>
        <Text variant={"button"} color={"primary"}>button2</Text>
        <Text variant={"nav"}>navigation</Text>
      </Box>
      <TextField label="Email" variant="outlined" margin={"normal"} size={"small"} />
      <Button variant={"transparent"} href={"/categories"}>
        <Text variant={"button"} color={"primary"}>Link button</Text>
      </Button>
      <ColorList />
      <CountrySelect />
    </ContentContainer>
    {/* @ts-expect-error Server Component */}
    <News lng={lng} />
  </>);
};

export default DemoPage;
