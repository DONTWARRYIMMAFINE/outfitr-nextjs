"use client";

import { Box } from "@/components/ui";
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps, CircularProgress } from "@mui/material";
import { FC } from "react";

export interface AvatarProps extends MuiAvatarProps {
  loading?: boolean;
}

const Avatar: FC<AvatarProps> = ({ loading, sx, children, ...props }) => {
  return (
    <Box position={"relative"}>
      {loading && <CircularProgress color={"inherit"} sx={{ zIndex: 100, position: "absolute", left: "40%", top: "40%" }} />}
      <MuiAvatar sx={{ opacity: loading ? 0.5 : 1, ...sx }} {...props}>
        {children}
      </MuiAvatar>
    </Box>
  );
};

export default Avatar;
