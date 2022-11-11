import React           from "react";
import { Switch, SwitchProps } from "@mui/material";
import { useTheme }    from "next-themes";
import DarkModeIcon    from "@mui/icons-material/DarkMode";
import LightModeIcon   from "@mui/icons-material/LightMode";


const ModeSwitch: React.FC<SwitchProps> = ({ ...rest }) => {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <Switch
            icon={ <LightModeIcon sx={ { color: "text.secondary", bgcolor: "text.primary", width: 32, height: 32, padding: 1 / 2, borderRadius: 50 } }/> }
            checkedIcon={ <DarkModeIcon sx={ { color: "text.secondary", bgcolor: "text.primary", width: 32, height: 32, padding: 1 / 2, borderRadius: 50 } }/> }
            onClick={ () => setTheme(resolvedTheme === "light" ? "dark" : "light") }
            checked={ resolvedTheme === "dark" }
            { ...rest }
        />
    )
}

export default ModeSwitch;