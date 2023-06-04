import Catalog from "@/components/common/Catalog";
import { PageContainer } from "@/components/ui";
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
    <PageContainer pageTitle={"Catalog Page"}>
      <Catalog category={Array.isArray(code) ? code[1] : code} parentCategory={code[0]} lng={lng} />
    </PageContainer>
  );
};

export default CatalogPage;
