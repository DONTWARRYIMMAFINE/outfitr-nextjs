import Price from "@/components/common/Price";
import { Box, Text, TextProps } from "@/components/ui";
import { PriceFragment } from "@/lib/graphql/schema.generated";
import { maxBy, minBy } from "lodash";

export interface PriceRangeProps extends TextProps {
  prices: PriceFragment[];
}

const PriceRange = ({ prices, ...props }: PriceRangeProps) => {
  const minPrice = minBy(prices, "amount");
  const maxPrice = maxBy(prices, "amount");

  if (minPrice === maxPrice) {
    return (
      <Price
        amount={minPrice?.amount!}
        currency={minPrice?.currency!}
        {...props}
      />
    );
  }

  return (
    <Box display={"flex"} alignItems={"center"} gap={1}>
      <Price
        amount={minPrice?.amount!}
        currency={minPrice?.currency!}
        {...props}
      />
      <Text variant={"p"} color={"primary"}>–</Text>
      <Price
        amount={maxPrice?.amount}
        currency={maxPrice?.currency}
        {...props}
      />
    </Box>
  );
};

export default PriceRange;
