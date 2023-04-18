import { Providers } from "@/components";
import Footer from "@/components/common/layout/footer/Footer";
import Header from "@/components/common/layout/header/Header";
import { FC, ReactNode } from "react";

export interface RootLayoutProps {
  children?: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
    <head>
      <title>Outfitr</title>
      <meta name="description" content="Outfitr official style provider" />
      <link rel="icon" href="/favicon.ico" />
    </head>
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
