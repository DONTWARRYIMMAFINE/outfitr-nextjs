import { Box, Text } from "@/components/ui";
import PriceRangeSlider from "@/components/common/PriceRangeSlider";
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
      <Text variant={"p"}>{t("component.label.priceRange")}</Text>
      <PriceRangeSlider value={value} handleChange={handleChange} currency={currency} />
    </Box>
  );
};

export default withTranslation()(PriceFilter);
