"use client";

import { Switch, SwitchProps } from "@mui/material";
import { useTheme } from "next-themes";
import { FC } from "react";
import Icons from "../ui/Icons";

const iconStart = <Icons.LightMode sx={{ opacity: 1, color: "text.primary", bgcolor: "text.reversed", padding: 1 / 3, borderRadius: "50%" }} />;
const iconEnd = <Icons.DarkMode sx={{ opacity: 1, color: "text.reversed", bgcolor: "text.primary", padding: 1 / 3, borderRadius: "50%" }} />;

const ModeSwitch: FC<SwitchProps> = ({ ...rest }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Switch
      variant={"mode"}
      icon={iconStart}
      checkedIcon={iconEnd}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      checked={resolvedTheme === "dark"}
      {...rest}
    />
  );
};

export default ModeSwitch;
