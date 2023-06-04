import { Box, Text } from "@/components/ui";
import { OrderHistoryFragment } from "@/lib/graphql/schema.generated";
import { Step, StepLabel, Stepper } from "@mui/material";
import moment from "moment";
import { FC, useState } from "react";

interface OrderStatusStepperProps {
  orderHistories: OrderHistoryFragment[];
}

const OrderStatusStepper: FC<OrderStatusStepperProps> = ({ orderHistories }) => {
  const [activeStep, setActiveStep] = useState(orderHistories.length - 1);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation={"vertical"}>
        {orderHistories.map((orderHistory) => (
          <Step key={orderHistory.id}>
            <StepLabel>
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
