import Wishlist from "@/components/common/Wishlist";
import { PageContainer } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | Wishlist",
};

interface WishlistPageProps extends LngParamsProps {}

const WishlistPage = async ({ params }: WishlistPageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, I18NS.Wishlist);

  return (
    <PageContainer pageTitle={t("page.title")}>
      <Wishlist />
    </PageContainer>
  );
};

export default WishlistPage;
