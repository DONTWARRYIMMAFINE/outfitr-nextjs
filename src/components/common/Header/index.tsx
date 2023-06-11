import { Hamburger, Logo, ModeSwitch } from "@/components/common";
import { AppBar, Box, Container, Divider, Grid, Hidden, Toolbar } from "@/components/ui";
import LinkNavigation from "./LinkNavigation";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <AppBar sx={{ minHeight: "10vh" }}>
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Toolbar sx={{ width: "100%", paddingX: { md: 8, xs: 3 } }}>
          <Grid alignItems={"center"}  container>
            <Grid item xs={4}>
              <Logo />
            </Grid>
            <Grid item xs={4}>
              <Hidden mdDown>
                <Box display={"flex"} justifyContent={"center"}>
                  <LinkNavigation />
                </Box>
              </Hidden>
            </Grid>
            <Grid item xs={4}>
              <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
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
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
