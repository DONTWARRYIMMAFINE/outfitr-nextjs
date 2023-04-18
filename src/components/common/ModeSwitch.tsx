"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import { Switch, SwitchProps } from "@mui/material";
import { useTheme } from "next-themes";
import { FC } from "react";

const ModeSwitch: FC<SwitchProps> = ({ ...rest }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Switch
      variant={"mode"}
      icon={<LightMode sx={{ opacity: 1, color: "text.primary", bgcolor: "text.secondary", padding: 1 / 3, borderRadius: "50%" }} />}
      checkedIcon={<DarkMode sx={{ opacity: 1, color: "text.secondary", bgcolor: "text.primary", padding: 1 / 3, borderRadius: "50%" }} />}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      checked={resolvedTheme === "dark"}
      {...rest}
    />
  );
};

export default ModeSwitch;
