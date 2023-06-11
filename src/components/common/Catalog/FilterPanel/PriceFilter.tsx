import { Box, Text } from "@/components/ui";
import PriceRangeSlider from "@/components/common/PriceRangeSlider";
import { I18NS } from "@/constants/I18NS";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface PriceFilterProps extends WithTranslation {
  value: number[];
  handleChange: (value: number[]) => void;
  currency?: string;
}

const PriceFilter: FC<PriceFilterProps> = ({ value, handleChange, currency = "BYN", t }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"}>
      <Text variant={"p"}>{t("content.filter.priceRange.label")}</Text>
      <PriceRangeSlider value={value} handleChange={handleChange} currency={currency} />
    </Box>
  );
};

export default withTranslation(I18NS.Catalog)(PriceFilter);
