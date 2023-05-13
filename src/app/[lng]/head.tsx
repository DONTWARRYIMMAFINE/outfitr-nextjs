import { Routes } from "@/constants/routes";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";

const HomePageHead = async function Head({ params: { lng } }: LngParamsProps) {
  const { t } = await useTranslation(lng, Routes.Home.title.toLocaleLowerCase(lng));

  return (
    <>
      <title>{t("title")}</title>
      <meta name={"applicationName"} content={"Outfitr"} />
      <meta name={"description"} content={t("description") || ""} />
      <meta name={"keywords"} content={"outfitr, clothing, fashion, style, apparel, outfits, trends, online shopping, women's wear, men's wear"} />
    </>
  );
};

export default HomePageHead;
