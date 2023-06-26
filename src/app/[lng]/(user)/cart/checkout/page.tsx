import CheckoutSteps from "@/components/common/Cart/Checkout";
import { PageContainer } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Outfitr",
};

interface CheckoutPageProps extends LngParamsProps {}

const CheckoutPage = async ({ params }: CheckoutPageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, I18NS.Checkout);

  return (
    <PageContainer pageTitle={t("page.title")}>
      <CheckoutSteps />
    </PageContainer>
  );
};

export default CheckoutPage;
