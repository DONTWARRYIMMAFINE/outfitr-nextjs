import { Hamburger, Logo, ModeSwitch } from "@/components/common";
import { AppBar, Box, Container, Divider, Hidden, Toolbar } from "@/components/ui";
import LinkNavigation from "./LinkNavigation";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <AppBar sx={{ minHeight: "10vh" }}>
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Toolbar sx={{ width: "100%" }}>
          <Logo />
          <Hidden mdDown>
            <LinkNavigation />
          </Hidden>
          <Box display={"flex"} alignItems={"center"}>
            <ModeSwitch sx={{ marginRight: { md: 2, xs: 1 } }} />
            <Hidden mdDown>
              <Navigation />
            </Hidden>
            <Hidden mdUp>
              <Hamburger sx={{ marginLeft: { md: 2, xs: 1 } }}>
                <LinkNavigation direction={"column"} />
                <Divider />
                <Navigation />
              </Hamburger>
            </Hidden>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
