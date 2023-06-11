import { Box, Text } from "@/components/ui";
import { OrderHistoryFragment, OrderStatus } from "@/lib/graphql/schema.generated";
import { Step, StepLabel, Stepper } from "@mui/material";
import moment from "moment";
import { FC } from "react";

interface OrderStatusStepperProps {
  orderHistories: OrderHistoryFragment[];
}

const OrderStatusStepper: FC<OrderStatusStepperProps> = ({ orderHistories }) => {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={orderHistories.length - 1} orientation={"vertical"}>
        {orderHistories.map((orderHistory) => (
          <Step key={orderHistory.id}>
            <StepLabel error={[OrderStatus.Rejected, OrderStatus.Cancelled].includes(orderHistory.status)}>
              <Box display={"flex"} flexDirection={"column"}>
                <Text variant={"p"}>{orderHistory.status}</Text>
                <Text variant={"small"} opacity={0.7}>{moment(orderHistory.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</Text>
              </Box>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default OrderStatusStepper;
