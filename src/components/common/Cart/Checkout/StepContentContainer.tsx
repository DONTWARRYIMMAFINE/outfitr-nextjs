import { Grid } from "@/components/ui";
import { GridProps } from "@mui/material";
import { FC } from "react";
import CartTotals, { CartTotalsProps } from "../CartTotals";

export interface StepContentContainerProps extends GridProps, Omit<CartTotalsProps, "t" | "tReady" | "i18n"> {
  index: number;
  value: number;
  hideTotals?: boolean;
}

const StepContentContainer: FC<StepContentContainerProps> = ({ index, value, hideTotals, PreviousButton, NextButton, children, ...props }) => {
  return (
    <Grid container item xs={12} spacing={4} {...props}>
      <Grid item xs={hideTotals ? 12 : 8}>
        {value === index && children}
      </Grid>
      <Grid item hidden={hideTotals} xs={4}>
        {value === index && <CartTotals PreviousButton={PreviousButton} NextButton={NextButton} showItems />}
      </Grid>
    </Grid>
  );
};

export default StepContentContainer;
