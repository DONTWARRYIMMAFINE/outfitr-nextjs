import React                                               from "react";
import theme                                               from "../../styles/theme";
import Head                                                from "next/head";
import { CacheProvider, EmotionCache }                     from "@emotion/react";
import { Box, CssBaseline }                                from "@mui/material";
import createEmotionCache                                  from "../../utility/createEmotionCache";
import Footer                                              from "./Footer";
import Header                                              from "./Header";
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';


const clientSideEmotionCache = createEmotionCache();

export interface PageProviderProps {
    children: React.ReactNode;
    emotionCache?: EmotionCache;
}

const PageProvider: React.FC<PageProviderProps> = ({ emotionCache = clientSideEmotionCache, children }) => {
    return (
        <CacheProvider value={ emotionCache }>
            <Head>
                <title>Outfitr</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <CssVarsProvider theme={ theme }>
                <CssBaseline enableColorScheme/>
                <Header/>
                { children }
                <Footer/>
            </CssVarsProvider>
        </CacheProvider>
    )
}

export default PageProvider;