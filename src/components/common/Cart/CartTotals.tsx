"use client";

import Price from "@/components/common/Price";
import { Box, Button, Divider, Text } from "@/components/ui";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";

interface CartTotalsProps {}

const CartTotals: FC<CartTotalsProps> = ({}) => {
  const user = useReactiveVar(loggedInUser);

  return (
    <Box display={"flex"} flexDirection={"column"} bgcolor={"background.body"} borderRadius={0.5} padding={3} gap={4}>
      <Text variant={"h1"} textAlign={"center"}>Cart Totals</Text>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Text></Text>
        <Text></Text>
      </Box>
      <Divider flexItem sx={{ borderStyle: "dashed" }} />
      <Box display={"flex"} justifyContent={"space-between"}>
        <Text variant={"h1"}>Total</Text>
        <Price amount={user?.cart.price.amount} currency={user?.cart.price.currency} />
      </Box>
      <Button variant={"primary"}>
        To Checkout
      </Button>
    </Box>
  );
};

export default CartTotals;
