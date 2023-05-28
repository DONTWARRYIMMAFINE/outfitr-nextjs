"use client";

import DeliveryInfoStep from "@/components/common/Cart/Checkout/DeliveryInfoStep";
import PaymentInfoStep from "@/components/common/Cart/Checkout/PaymentInfoStep";
import { Box, Button, Text } from "@/components/ui";
import { userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import ContactInfoStep from "./ContactInfoStep";

export const steps = ["contactInfo", "deliveryInfo", "paymentInfo"];

export interface CheckoutStepsProps extends WithTranslation {}

const CheckoutSteps = ({ t }: CheckoutStepsProps) => {
  const cart = useReactiveVar(userCart);
  const [currentStep, setCurrentStep] = useState(0);

  const onPlaceOrderClick = () => {
    console.log("order place");
  };

  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={4}>
      <Stepper activeStep={currentStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>
              <Text variant={"small"}>{t(`page.checkout.step.${steps[index]}.label`)}</Text>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box width={"100%"}>
        <ContactInfoStep
          value={currentStep}
          index={0}
          NextButton={
            <Button variant={"primary"} fullWidth onClick={() => setCurrentStep(1)} disabled={!cart?.deliveryAddress}>
              {t("component.button.toDeliveryInfo")}
            </Button>
          }
        />
        <DeliveryInfoStep
          value={currentStep}
          index={1}
          PreviousButton={
            <Button variant={"transparent"} onClick={() => setCurrentStep(0)}>
              {t("component.button.back")}
            </Button>
          }
          NextButton={
            <Button variant={"primary"} onClick={() => setCurrentStep(2)} disabled={!cart?.deliveryMethod} fullWidth>
              {t("component.button.toPaymentInfo")}
            </Button>
          }
        />
        <PaymentInfoStep
          value={currentStep}
          index={2}
          PreviousButton={
            <Button variant={"transparent"} onClick={() => setCurrentStep(1)} fullWidth>
              {t("component.button.back")}
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

export default withTranslation()(CheckoutSteps);
