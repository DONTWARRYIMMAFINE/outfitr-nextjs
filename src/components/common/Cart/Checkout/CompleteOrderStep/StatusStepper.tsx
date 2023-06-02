import { Box, Text } from "@/components/ui";
import { OrderHistoryFragment } from "@/lib/graphql/schema.generated";
import { Step, StepContent, StepLabel, Stepper } from "@mui/material";
import moment from "moment";
import { FC, useState } from "react";

interface StatusStepperProps {
  orderHistories: OrderHistoryFragment[];
}

const StatusStepper: FC<StatusStepperProps> = ({ orderHistories }) => {
  const [activeStep, setActiveStep] = useState(orderHistories.length - 1);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation={"vertical"}>
        {orderHistories.map((orderHistory, index) => (
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

export default StatusStepper;
