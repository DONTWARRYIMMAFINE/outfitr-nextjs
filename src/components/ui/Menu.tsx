"use client";

import { Menu as MuiMenu, MenuProps as MuiMenuProps } from "@mui/material";
import { FC } from "react";

export interface MenuProps extends MuiMenuProps {}

const Menu: FC<MenuProps> = ({ sx, transformOrigin, children, ...props }) => {
  return (
    <MuiMenu
      PaperProps={{
        elevation: 0,
        sx: {
          ...sx,
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 3,
          paddingX: 3,
          paddingY: 2,
          borderRadius: 0.25,
          bgcolor: "background.drawer",
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: "\"\"",
            display: "block",
            position: "absolute",
            top: 0,
            right: transformOrigin?.horizontal === "center" ? "50%" : transformOrigin?.horizontal === "right" ? 16 : -16,
            width: 10,
            height: 10,
            bgcolor: "background.drawer",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={transformOrigin}
      sx={sx}
      {...props}
    >
      {children}
    </MuiMenu>
  );
};

export default Menu;
