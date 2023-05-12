import Test from "@/components/common/category/Test";
import { ContentContainer } from "@/components/ui";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Outfitr | Catalog",
};

interface CatalogPageProps {}

const CatalogPage: FC<CatalogPageProps> = ({}) => {

  return (
    <ContentContainer pageTitle={"Catalog Page"}>
      <Test />
    </ContentContainer>
  );
};

export default CatalogPage;
