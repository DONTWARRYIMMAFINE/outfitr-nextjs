import { Hamburger, Logo, ModeSwitch } from "@/components/common";
import { AppBar, Box, Container, Divider, Hidden, Toolbar } from "@/components/ui";
import authenticated from "@/constants/authenticated";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import Navigation from "./HeaderIconButtonNavigation";
import HeaderRoutes from "./HeaderRoutes";

const Header: FC = () => {
  return (
    <AppBar sx={{ minHeight: "10vh" }}>
      <Container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Toolbar sx={{ width: "100%" }}>
          <Logo />
          <Hidden mdDown>
            <HeaderRoutes />
          </Hidden>
          <Box display={"flex"} alignItems={"center"}>
            <ModeSwitch sx={{ marginRight: { md: 2, xs: 1 } }} />
            <Hidden mdDown>
              <Navigation />
            </Hidden>
            <Hidden mdUp>
              <Hamburger sx={{ marginLeft: { md: 2, xs: 1 } }}>
                <HeaderRoutes direction={"column"} />
                <Divider sx={{ marginY: 2 }} />
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
