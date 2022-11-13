import React, { useEffect, useState } from "react";
import { useTheme }                   from "next-themes";
import { ThemeProvider } from "@mui/material";
import lightTheme        from "../../styles/lightTheme";
import darkTheme         from "../../styles/darkTheme";


export interface MuiThemeProviderProps {
    children: React.ReactNode;
}

const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <ThemeProvider theme={ resolvedTheme === "dark" ? darkTheme : lightTheme }>
            { children }
        </ThemeProvider>
    );
};

export default MuiThemeProvider;