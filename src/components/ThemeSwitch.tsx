import React, { useEffect }            from "react";
import { SwitchProps, useColorScheme } from "@mui/material";
import Switch                          from "./Switch";
import DarkModeIcon                    from "@mui/icons-material/DarkMode";
import LightModeIcon                   from "@mui/icons-material/LightMode";


const ThemeSwitch: React.FC<SwitchProps> = ({ ...rest }) => {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // for server-side rendering
        // Read more on https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
        return null;
    }

    return (
        <Switch
            icon={ <LightModeIcon sx={ { color: "text.secondary", bgcolor: "text.primary", width: 32, height: 32, padding: 1 / 2, borderRadius: 50 } }/> }
            checkedIcon={ <DarkModeIcon sx={ { color: "text.secondary", bgcolor: "text.primary", width: 32, height: 32, padding: 1 / 2, borderRadius: 50 } }/> }
            onClick={ () => setMode(mode === "light" ? "dark" : "light") }
            checked={ mode == "dark" }
            { ...rest }
        />
    )
}

export default ThemeSwitch;