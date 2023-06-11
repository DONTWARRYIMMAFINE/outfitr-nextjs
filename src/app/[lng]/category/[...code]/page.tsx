import Catalog from "@/components/common/Catalog";
import { PageContainer } from "@/components/ui";
import { Categories } from "@/lib/graphql/schema.generated";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Outfitr | Catalog",
};

type CatalogPageProps = LngParamsProps & {
  params: {
    code: Categories[] | Categories;
  }
}

const CatalogPage: FC<CatalogPageProps> = ({ params }) => {
  const { code, lng } = params;
  const category = Array.isArray(code) ? code[1] : code;
  const parentCategory = Array.isArray(code) ? code[0] : undefined;

  return (
    <PageContainer pageTitle={"Catalog Page"}>
      <Catalog category={category} parentCategory={parentCategory} lng={lng} />
    </PageContainer>
  );
};

export default CatalogPage;
