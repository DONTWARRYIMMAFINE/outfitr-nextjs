"use client";

import PaymentMethodList from "@/components/common/Cart/Checkout/PaymentInfoStep/PaymentMethodList";
import StepContentContainer, { StepContentContainerProps } from "@/components/common/Cart/Checkout/StepContentContainer";
import { Box, Text } from "@/components/ui";
import { WithTranslation, withTranslation } from "react-i18next";

export interface PaymentInfoStepProps extends Omit<StepContentContainerProps, "children">, WithTranslation {}

const PaymentInfoStep = ({ t, tReady, ...props }: PaymentInfoStepProps) => {
  return (
    <StepContentContainer t={t} tReady={tReady} {...props}>
      <Box display={"flex"} flexDirection={"column"} minHeight={"100%"} borderRadius={0.5} bgcolor={"background.body"} padding={4} gap={4}>
        <Box display={"flex"} flexDirection={"column"}>
          <Text variant={"p"} opacity={0.7} paragraph>
            {t("page.checkout.step.paymentInfo.label")}
          </Text>
          <PaymentMethodList />
        </Box>
      </Box>
    </StepContentContainer>
  );
};

export default withTranslation()(PaymentInfoStep);
