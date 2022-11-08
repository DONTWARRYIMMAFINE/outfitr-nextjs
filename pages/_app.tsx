import "../src/styles/global.css";
import "../src/styles/next.css";
import "../src/styles/components.css";
import React             from "react";
import type { AppProps } from "next/app";
import { EmotionCache }  from "@emotion/react";
import PageProvider      from "../src/components/page/PageProvider";


export interface CacheAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const App: React.FC<CacheAppProps> = ({ Component, pageProps, emotionCache }) => {
    return (
        <PageProvider emotionCache={ emotionCache }>
            <Component { ...pageProps }/>
        </PageProvider>
    );
}

export default App;