import { Providers } from "@/components";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import { Metadata } from "next";
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Outfitr",
  applicationName: "Outfitr",
  description: "Outfitr official style provider",
  keywords: "outfitr, clothing, fashion, style, apparel, outfits, trends, online shopping, women's wear, men's wear",
  icons: "/favicon.png"
};

export interface RootLayoutProps {
  children?: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
    <body>
    <Providers>
      <Header />
      <main>{children}</main>
      {<Footer />}
    </Providers>
    </body>
    </html>
  );
};

export default RootLayout;
