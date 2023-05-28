import DeliveryOptions from "@/components/common/Cart/Checkout/ContactInfoStep/DeliveryOptions";
import StepContentContainer, { StepContentContainerProps } from "@/components/common/Cart/Checkout/StepContentContainer";
import ContactInfoForm from "@/components/common/forms/ContactInfoForm";
import { Box, Text } from "@/components/ui";
import { WithTranslation, withTranslation } from "react-i18next";

export interface ContactInfoStepProps extends Omit<StepContentContainerProps, "children">, WithTranslation {}

const ContactInfoStep = ({ t, tReady, ...props }: ContactInfoStepProps) => {
  return (
    <StepContentContainer t={t} tReady={tReady} {...props}>
      <Box display={"flex"} flexDirection={"column"} minHeight={"100%"} borderRadius={0.5} bgcolor={"background.body"} padding={4} gap={4}>
        <Box display={"flex"} flexDirection={"column"}>
          <Text variant={"p"} opacity={0.7} paragraph>
            {t("page.checkout.step.contactInfo.label")}
          </Text>
          <ContactInfoForm />
        </Box>
        <DeliveryOptions />
      </Box>
    </StepContentContainer>
  );
};

export default withTranslation()(ContactInfoStep);
