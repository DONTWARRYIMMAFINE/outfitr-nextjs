"use client";

import { Container as MuiContainer, ContainerProps as MuiContainerProps } from "@mui/material";
import { FC } from "react";

interface ContainerProps extends MuiContainerProps {}

const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <MuiContainer
      maxWidth={"xl"}
      sx={{ flex: 1 }}
      {...props}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;
