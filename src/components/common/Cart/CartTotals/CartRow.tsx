import Price, { PriceProps } from "@/components/common/Price";
import { Box } from "@/components/ui";
import { FC, PropsWithChildren } from "react";

interface OrderRowProps extends PropsWithChildren {
  priceProps: Partial<PriceProps>;
}

const CartRow: FC<OrderRowProps> = ({ children, priceProps }) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
      {children}
      <Price {...priceProps} />
    </Box>
  );
};

export default CartRow;
