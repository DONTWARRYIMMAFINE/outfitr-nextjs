import Price from "@/components/common/Price";
import { Box, Text } from "@/components/ui";
import { PriceFragment } from "@/lib/graphql/schema.generated";
import { maxBy, minBy } from "lodash";

export interface PriceRangeProps {
  prices: PriceFragment[];
}

const PriceRange = ({ prices }: PriceRangeProps) => {
  const minPrice = minBy(prices, "amount");
  const maxPrice = maxBy(prices, "amount");

  if (minPrice === maxPrice) {
    return (
      <Price
        amount={minPrice?.amount!}
        currency={minPrice?.currency!}
      />
    );
  }

  return (
    <Box display={"flex"} gap={1}>
      <Price
        amount={minPrice?.amount!}
        currency={minPrice?.currency!}
      />
      <Text variant={"p"} color={"primary"}>–</Text>
      <Price
        amount={maxPrice?.amount}
        currency={maxPrice?.currency}
      />
    </Box>
  );
};

export default PriceRange;
