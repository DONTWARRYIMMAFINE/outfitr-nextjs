"use client";

import DeliveryMethodOptions from "@/components/common/Cart/Checkout/DeliveryInfoStep/DeliveryMethodOptions";
import StepContentContainer, { StepContentContainerProps } from "@/components/common/Cart/Checkout/StepContentContainer";
import { Box, Text } from "@/components/ui";
import { WithTranslation, withTranslation } from "react-i18next";

export interface DeliveryInfoStepProps extends Omit<StepContentContainerProps, "children">, WithTranslation {}

const DeliveryInfoStep = ({ t, tReady, ...props }: DeliveryInfoStepProps) => {
  return (
    <StepContentContainer t={t} tReady={tReady} {...props}>
      <Box display={"flex"} flexDirection={"column"} minHeight={"100%"} borderRadius={0.5} bgcolor={"background.body"} padding={4} gap={4}>
        <Box display={"flex"} flexDirection={"column"}>
          <Text variant={"p"} opacity={0.7} paragraph>
            {t("page.checkout.step.deliveryInfo.label")}
          </Text>
          <DeliveryMethodOptions />
        </Box>
      </Box>
    </StepContentContainer>
  );
};

export default withTranslation()(DeliveryInfoStep);
