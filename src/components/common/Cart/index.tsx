"use client";

import CartItemList from "@/components/common/Cart/CartItemList";
import CartTotals from "@/components/common/Cart/CartTotals";
import { Button, Grid } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface CartProps extends WithTranslation {}

const Cart: FC<CartProps> = ({ t }) => {
  const cart = useReactiveVar(userCart);

  return (
    <Grid container spacing={4}>
      <Grid item xs={8}>
        <CartItemList />
      </Grid>
      <Grid item xs={4}>
        <CartTotals
          NextButton={
            <Button
              variant={"primary"}
              href={Routes.Checkout.href}
              disabled={cart?.cartItems?.length === 0}
              fullWidth
            >
              {t("component.button.checkout")}
            </Button>
          }
        />
      </Grid>
    </Grid>
  );
};

export default withTranslation()(Cart);
