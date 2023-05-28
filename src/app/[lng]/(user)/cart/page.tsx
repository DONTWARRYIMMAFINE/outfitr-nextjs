import { News } from "@/components/common";
import Cart from "@/components/common/Cart";
import { PageContainer } from "@/components/ui";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | Cart",
};

interface CartPageProps extends LngParamsProps {}

const CartPage = async ({ params }: CartPageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng);

  return (<>
      <PageContainer pageTitle={t("page.cart.title")} disableBottomPadding>
        <Cart />
      </PageContainer>
      {/* @ts-expect-error Server Component */}
      <News lng={lng} />
    </>
  );
};

export default CartPage;
