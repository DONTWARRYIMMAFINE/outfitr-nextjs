import Head                                        from "next/head";
import React                                       from "react";
import { CacheProvider, EmotionCache }             from "@emotion/react";
import { ThemeProvider as PreferredThemeProvider } from "next-themes";
import createEmotionCache                          from "../../utility/createEmotionCache";
import Header                                      from "../Header";
import MuiThemeProvider                            from "./MuiThemeProvider";


const clientSideEmotionCache = createEmotionCache();

export interface PageProviderProps {
    children: React.ReactNode;
    emotionCache?: EmotionCache;
}

const PageProvider: React.FC<PageProviderProps> = ({ emotionCache = clientSideEmotionCache, children }) => {
    return (
        <PreferredThemeProvider>
            <CacheProvider value={emotionCache}>
                <Head>
                    <title>Outfitr</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <MuiThemeProvider>
                    <Header/>
                    {children}
                </MuiThemeProvider>
            </CacheProvider>
        </PreferredThemeProvider>
    )
}

export default PageProvider;