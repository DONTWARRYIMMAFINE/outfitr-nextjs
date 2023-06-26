"use client";

import { Box, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { WithTranslation, withTranslation } from "react-i18next";
import StepContentContainer, { StepContentContainerProps } from "../StepContentContainer";
import PaymentMethodList from "./PaymentMethodList";

export interface PaymentInfoStepProps extends Omit<StepContentContainerProps, "children">, WithTranslation {}

const PaymentInfoStep = ({ t, tReady, ...props }: PaymentInfoStepProps) => {
  return (
    <StepContentContainer {...props}>
      <Box display={"flex"} flexDirection={"column"} minHeight={"100%"} borderRadius={0.5} bgcolor={"background.body"} padding={4} gap={4}>
        <Box display={"flex"} flexDirection={"column"}>
          <Text variant={"p"} opacity={0.7} paragraph>
            {t("content.steps.paymentInfo.label")}
          </Text>
          <PaymentMethodList />
        </Box>
      </Box>
    </StepContentContainer>
  );
};

export default withTranslation(I18NS.Checkout)(PaymentInfoStep);
