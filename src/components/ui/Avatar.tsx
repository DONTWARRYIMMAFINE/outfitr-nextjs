"use client";

import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from "@mui/material";
import { FC } from "react";

interface AvatarProps extends MuiAvatarProps {}

const Avatar: FC<AvatarProps> = ({ children, ...props }) => {
  return <MuiAvatar {...props}>{children}</MuiAvatar>;
};

export default Avatar;
