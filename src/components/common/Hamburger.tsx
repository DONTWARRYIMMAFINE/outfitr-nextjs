"use client";

import Logo from "@/components/common/Logo";
import { Box, IconButton, Icons } from "@/components/ui";
import { BoxProps } from "@/components/ui/Box";
import { Divider, Drawer, DrawerProps, useTheme } from "@mui/material";
import React, { FC, useState } from "react";

type Anchor = "left" | "right";

interface HamburgerProps extends Omit<BoxProps, "ref">, Omit<DrawerProps, "color" | "anchor"> {
  anchor?: Anchor;
}

const Hamburger: FC<HamburgerProps> = ({ children, anchor = "right", ...props }) => {
  const { palette } = useTheme();
  const [state, setState] = useState({
    left: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => {
    setState({ ...state, [anchor]: open });
  };

  return (
    <Box {...props}>
      <IconButton onClick={() => toggleDrawer(anchor, true)}>
        <Icons.Hamburger />
      </IconButton>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={() => toggleDrawer(anchor, false)}
      >
        <Box width={360} height={"100%"} bgcolor={palette.background.drawer} padding={4}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Logo />
            <IconButton onClick={() => toggleDrawer(anchor, false)}>
              <Icons.Close />
            </IconButton>
          </Box>
          <Divider sx={{ marginY: 2 }} />
          {children}
        </Box>
      </Drawer>
    </Box>
  );
};

export default Hamburger;
