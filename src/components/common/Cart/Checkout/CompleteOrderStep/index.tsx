import { Box, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import StepContentContainer, { StepContentContainerProps } from "../StepContentContainer";
import OrderInfoList from "./OrderInfoList";

interface CompleteOrderStepProps extends Omit<StepContentContainerProps, "children">, WithTranslation {}

const CompleteOrderStep: FC<CompleteOrderStepProps> = ({ t, tReady, ...props }) => {
  return (
    <StepContentContainer {...props} hideTotals>
      <Box display={"flex"} flexDirection={"column"} minHeight={"100%"} borderRadius={0.5} bgcolor={"background.body"} padding={4} gap={4}>
        <Box display={"flex"} flexDirection={"column"}>
          <Text variant={"p"} opacity={0.7} paragraph>
            {t("content.steps.completeOrder.label")}
          </Text>
          <OrderInfoList />
        </Box>
      </Box>
    </StepContentContainer>
  );
};

export default withTranslation(I18NS.Checkout)(CompleteOrderStep);
