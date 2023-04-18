import Navigation from "@/components/common/layout/header/HeaderIconButtonNavigation";
import Logo from "@/components/common/Logo";
import { Box, Button, Container, Link, Switch, Text } from "@/components/ui";
import { FC } from "react";

const HomePage: FC = () => {
  return (<>
    <Container>
      <Box>
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
        <Button variant={"transparent"} href={"/categories"}>
          <Text variant={"button"} color={"primary"}>Link button</Text>
        </Button>
        <Navigation />
      </Box>
    </Container>
  </>);
};

export default HomePage;
