import Catalog from "@/components/common/Catalog";
import { ContentContainer } from "@/components/ui";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Outfitr | Catalog",
};

type CatalogPageProps = LngParamsProps & {
  params: {
    code: string[] | string;
  }
}

const CatalogPage: FC<CatalogPageProps> = ({ params }) => {
  const { code, lng } = params;

  return (
    <ContentContainer pageTitle={"Catalog Page"}>
      <Catalog category={Array.isArray(code) ? code[1] : code} lng={lng} />
    </ContentContainer>
  );
};

export default CatalogPage;
