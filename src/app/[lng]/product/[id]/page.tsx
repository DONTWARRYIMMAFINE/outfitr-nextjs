import { ProductDetails } from "@/components/common";
import { PageContainer } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | Outfitr",
};

type PageProps = LngParamsProps & {
  params: {
    id: string;
  }
};

const ProductPage = async ({ params }: PageProps) => {
  const { id, lng } = params;
  const { t } = await useTranslation(lng, I18NS.ProductDetails);

  return (
    <PageContainer pageTitle={t("page.title")}>
      <ProductDetails productId={id} lng={lng} />
    </PageContainer>
  );
};

export default ProductPage;
