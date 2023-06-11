"use client";

import CompleteOrderStep from "@/components/common/Cart/Checkout/CompleteOrderStep";
import DeliveryInfoStep from "@/components/common/Cart/Checkout/DeliveryInfoStep";
import PaymentInfoStep from "@/components/common/Cart/Checkout/PaymentInfoStep";
import { Box, Button, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { Step, StepLabel, Stepper } from "@mui/material";
import { indexOf } from "lodash";
import { usePathname, useRouter } from "next-intl/client";
import { notFound, useSearchParams } from "next/navigation";
import { WithTranslation, withTranslation } from "react-i18next";
import ContactInfoStep from "./ContactInfoStep";

export const steps = ["contactInfo", "deliveryInfo", "paymentInfo", "completeOrder"];

export interface CheckoutStepsProps extends WithTranslation {}

const CheckoutSteps = ({ t }: CheckoutStepsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentStep = indexOf(steps, searchParams.get("step") || steps[0]);
  const cart = useReactiveVar(userCart);

  // Throw 404 error
  if (currentStep === -1) {
    notFound();
    return null;
  }

  const onChange = async (newValue: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("step", steps[newValue]);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={4}>
      <Stepper activeStep={currentStep} alternativeLabel>
        {["contactInfo", "deliveryInfo", "paymentInfo"].map((label, index) => (
          <Step key={index}>
            <StepLabel>
              <Text variant={"small"}>{t(`content.steps.${steps[index]}.label`)}</Text>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box width={"100%"}>
        <ContactInfoStep
          value={currentStep}
          index={0}
          NextButton={
            <Button
              variant={"primary"}
              onClick={() => onChange(1)}
              disabled={!cart?.deliveryAddress}
              fullWidth
            >
              {t("content.steps.contactInfo.button.next.label")}
            </Button>
          }
        />
        <DeliveryInfoStep
          value={currentStep}
          index={1}
          PreviousButton={
            <Button
              variant={"transparent"}
              onClick={() => onChange(0)}
            >
              {t("content.steps.deliveryInfo.button.back.label")}
            </Button>
          }
          NextButton={
            <Button
              variant={"primary"}
              onClick={() => onChange(2)}
              disabled={!cart?.deliveryMethod}
              fullWidth
            >
              {t("content.steps.deliveryInfo.button.next.label")}
            </Button>
          }
        />
        <PaymentInfoStep
          value={currentStep}
          index={2}
          PreviousButton={
            <Button
              variant={"transparent"}
              onClick={() => onChange(1)}
              fullWidth
            >
              {t("content.steps.paymentInfo.button.back.label")}
            </Button>
          }
        />
        <CompleteOrderStep
          value={currentStep}
          index={3}
        />
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.Checkout)(CheckoutSteps);
