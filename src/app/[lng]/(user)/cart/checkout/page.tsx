import CheckoutSteps from "../../../../../components/common/Cart/Checkout";
import { PageContainer } from "@/components/ui";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | Checkout",
};

interface CheckoutPageProps extends LngParamsProps {}

const CheckoutPage = async ({ params }: CheckoutPageProps) => {
  const { t } = await useTranslation(params.lng);

  return (
    <PageContainer pageTitle={t("page.checkout.title")}>
      <CheckoutSteps />
    </PageContainer>
  );
};

export default CheckoutPage;
