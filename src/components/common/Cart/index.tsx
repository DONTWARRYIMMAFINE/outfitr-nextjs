import CartItemList from "@/components/common/Cart/CartItemList";
import CartTotals from "@/components/common/Cart/CartTotals";
import { Grid } from "@/components/ui";
import { FC } from "react";

interface CartProps {}

const Cart: FC<CartProps> = ({}) => {
  return (
    <Grid container spacing={12}>
      <Grid item xs={8}>
        <CartItemList />
      </Grid>
      <Grid item xs={4}>
        <CartTotals />
      </Grid>
    </Grid>
  );
};

export default Cart;
