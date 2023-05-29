"use client";

import { Container as MuiContainer, ContainerProps as MuiContainerProps } from "@mui/material";
import { FC } from "react";

export interface ContainerProps extends MuiContainerProps {}

const Container: FC<ContainerProps> = ({ children, sx, ...props }) => {
  return (
    <MuiContainer
      maxWidth={"xl"}
      sx={{ flex: 1, ...sx }}
      {...props}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;
