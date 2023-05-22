"use client";

import { Text } from "@/components/ui";
import { TextProps } from "@/components/ui/Text";
import { FC, useMemo } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

export interface PriceProps extends TextProps, WithTranslation {
  amount?: number;
  currency?: string;
}

const Price: FC<PriceProps> = ({ amount = 0, currency = "BYN", i18n, ...props }) => {
  const currencyFormatter = useMemo(() => new Intl.NumberFormat(i18n.language, {
    style: "currency",
    currency,
  }), [currency, i18n.language]);

  return <Text variant={"price"} color={"primary"} {...props}>{currencyFormatter.format(amount)}</Text>;
};

export default withTranslation()(Price);
