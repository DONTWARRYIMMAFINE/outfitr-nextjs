import React                                       from "react";
import { ThemeProvider as PreferredThemeProvider } from "next-themes";
import { CssBaseline }                             from "@mui/material";
import Footer                                      from "./Footer";
import Header                                      from "./Header";
import MuiThemeProvider                            from "./MuiThemeProvider";


export interface PageProviderProps {
    children: React.ReactNode;
}

const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
    return (
        <PreferredThemeProvider enableSystem enableColorScheme>
            <MuiThemeProvider>
                <CssBaseline enableColorScheme/>
                <Header/>
                { children }
                <Footer/>
            </MuiThemeProvider>
        </PreferredThemeProvider>
    )
}

export default PageProvider;