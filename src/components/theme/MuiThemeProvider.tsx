import React, { useEffect, useState } from "react";
import { useTheme }                   from "next-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme }      from "../../styles/theme"


export interface MuiThemeProviderProps {
    children: React.ReactNode;
}

const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
    const { resolvedTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(darkTheme);

    useEffect(() => {
        resolvedTheme === "dark"
            ? setCurrentTheme(lightTheme)
            : setCurrentTheme(darkTheme);
    }, [resolvedTheme]);

    return (
        <ThemeProvider theme={ currentTheme }>
            <CssBaseline enableColorScheme/>
            { children }
        </ThemeProvider>
    );
};

export default MuiThemeProvider;