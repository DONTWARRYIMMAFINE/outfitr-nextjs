import OrderInfoList from "@/components/common/Cart/Checkout/CompleteOrderStep/OrderInfoList";
import StepContentContainer, { StepContentContainerProps } from "@/components/common/Cart/Checkout/StepContentContainer";
import { Box, Text } from "@/components/ui";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface CompleteOrderStepProps extends Omit<StepContentContainerProps, "children">, WithTranslation {}

const CompleteOrderStep: FC<CompleteOrderStepProps> = ({ t, tReady, ...props }) => {
  return (
    <StepContentContainer t={t} tReady={tReady} {...props} hideTotals>
      <Box display={"flex"} flexDirection={"column"} minHeight={"100%"} borderRadius={0.5} bgcolor={"background.body"} padding={4} gap={4}>
        <Box display={"flex"} flexDirection={"column"}>
          <Text variant={"p"} opacity={0.7} paragraph>
            {t("page.checkout.step.completeOrder.label")}
          </Text>
          <OrderInfoList />
        </Box>
      </Box>
    </StepContentContainer>
  );
};

export default withTranslation()(CompleteOrderStep);
