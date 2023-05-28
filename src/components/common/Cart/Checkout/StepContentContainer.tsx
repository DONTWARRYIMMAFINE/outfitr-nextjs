import CartTotals from "@/components/common/Cart/CartTotals";
import OrderTotals, { CartTotalsProps } from "@/components/common/Cart/CartTotals";
import CartTotalsItem from "@/components/common/Cart/CartTotals/CartTotalsItem";
import { Box, Grid } from "@/components/ui";
import { GridProps } from "@mui/material";
import { FC } from "react";

export interface StepContentContainerProps extends GridProps, CartTotalsProps {
  index: number;
  value: number;
}

const StepContentContainer: FC<StepContentContainerProps> = ({ index, value, PreviousButton, NextButton, children, ...props }) => {
  return (
    <Grid container item xs={12} spacing={4} {...props}>
      <Grid item xs={8}>
        {value === index && children}
      </Grid>
      <Grid item xs={4}>
        {value === index && <CartTotals PreviousButton={PreviousButton} NextButton={NextButton} showItems />}
      </Grid>
    </Grid>
  );
};

export default StepContentContainer;
