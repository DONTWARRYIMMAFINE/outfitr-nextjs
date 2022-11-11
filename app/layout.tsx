"use client";

import React        from "react";
import PageProvider from "../src/components/page/PageProvider";


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>Outfitr</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>
        <PageProvider>
            { children }
        </PageProvider>
        </body>
        </html>
    );
}