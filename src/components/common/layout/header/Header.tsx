import Hamburger from "@/components/common/Hamburger";
import { AppBar, Box, Container, Hidden, Toolbar } from "@/components/ui";
import { FC } from "react";
import Logo from "../../Logo";
import ModeSwitch from "../../ModeSwitch";
import Navigation from "./HeaderIconButtonNavigation";
import HeaderRoutes from "./HeaderRoutes";

const Header: FC = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
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
              </Hamburger>
            </Hidden>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
