import React                                    from "react";
import { SwitchProps, useTheme as useMuiTheme } from "@mui/material";
import { useTheme as useNextTheme }             from "next-themes";
import Switch                                   from "./Switch";
import DarkModeIcon                             from "@mui/icons-material/DarkMode";
import LightModeIcon                            from "@mui/icons-material/LightMode";


const ThemeSwitch: React.FC<SwitchProps> = ({ ...rest }) => {
    const { setTheme } = useNextTheme();
    const { palette, shape } = useMuiTheme();

    return (
        <Switch
            icon={ <LightModeIcon sx={ { color: palette.text.secondary, bgcolor: palette.text.primary, width: 32, height: 32, padding: 1 / 2, borderRadius: shape.borderRadius } }/> }
            checkedIcon={ <DarkModeIcon sx={ { color: palette.text.secondary, bgcolor: palette.text.primary, width: 32, height: 32, padding: 1 / 2, borderRadius: shape.borderRadius } }/> }
            onClick={ () => setTheme(palette.mode === "light" ? "dark" : "light") }
            checked={ palette.mode == "dark" }
            { ...rest }
        />
    )
}

export default ThemeSwitch;