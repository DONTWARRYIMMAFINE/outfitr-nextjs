import { Providers } from "@/components";
import { Footer, Header } from "@/components/common";
import { languages } from "@/lib/i18n/settings";
import { LngParamsProps } from "@/lib/types/params.type";
import { dir } from "i18next";
import { PropsWithChildren } from "react";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export interface RootLayoutProps extends PropsWithChildren, LngParamsProps {}

const RootLayout = ({ params, children }: RootLayoutProps) => {
  const {lng} = params;

  return (
    <html lang={lng} dir={dir(lng)}>
    <body>
    <Providers lng={lng}>
      <Header />
      <main>
        {children}
      </main>
      <Footer lng={lng} />
    </Providers>
    </body>
    </html>
  );
};

export default RootLayout;
