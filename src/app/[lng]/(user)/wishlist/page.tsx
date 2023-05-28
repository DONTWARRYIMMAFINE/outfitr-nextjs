import Wishlist from "@/components/common/Wishlist";
import { PageContainer } from "@/components/ui";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | Wishlist",
};

interface WishlistPageProps extends LngParamsProps {}

const WishlistPage = async ({ params }: WishlistPageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng);

  return (
    <PageContainer pageTitle={t("page.wishlist.title")}>
      <Wishlist />
    </PageContainer>
  );
};

export default WishlistPage;
