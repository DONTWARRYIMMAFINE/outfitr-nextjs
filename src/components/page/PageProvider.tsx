import createCache                                 from "@emotion/cache";
import { CacheProvider }                           from "@emotion/react";
import React                                       from "react";
import { ThemeProvider as PreferredThemeProvider } from "next-themes";
import { CssBaseline } from "@mui/material";
import Footer          from "./footer/Footer";
import Header          from "./header/Header";
import MuiThemeProvider                            from "./MuiThemeProvider";


export const muiCache = createCache({
    key: 'mui',
    prepend: true,
});

export interface PageProviderProps {
    children: React.ReactNode;
}

const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
    return (
        <CacheProvider value={ muiCache }>
            <PreferredThemeProvider enableSystem enableColorScheme>
                <MuiThemeProvider>
                    <CssBaseline enableColorScheme/>
                    <Header/>
                    { children }
                    <Footer/>
                </MuiThemeProvider>
            </PreferredThemeProvider>
        </CacheProvider>
    )
}

export default PageProvider;