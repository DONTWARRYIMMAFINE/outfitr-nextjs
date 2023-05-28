import ProductDetails from "@/components/common/ProductDetails";
import { PageContainer } from "@/components/ui";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | Product",
};

type PageProps = LngParamsProps & {
  params: {
    id: string;
  }
};

const ProductPage = async ({ params }: PageProps) => {
  const { id, lng } = params;
  const { t } = await useTranslation(lng);

  return (
    <PageContainer pageTitle={t("page.product.title")}>
      <ProductDetails productId={id} lng={lng} />
    </PageContainer>
  );
};

export default ProductPage;
