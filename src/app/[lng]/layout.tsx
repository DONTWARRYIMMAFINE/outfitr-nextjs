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

const RootLayout = async ({ params, children }: RootLayoutProps) => {
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
    <body>
    <Providers>
      <Header lng={params.lng} />
      <main>
        {children}
      </main>
      <Footer lng={params.lng} />
    </Providers>
    </body>
    </html>
  );
};

export default RootLayout;
