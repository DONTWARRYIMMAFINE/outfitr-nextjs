import PaymentMethodItem, { PaymentMethodItemProps } from "@/components/common/Cart/Checkout/PaymentInfoStep/PaymentMethodItem";
import { Button } from "@/components/ui";
import { FC } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

export interface CashPaymentMethodItemProps extends PaymentMethodItemProps, WithTranslation {}

const CashPaymentMethodItem: FC<CashPaymentMethodItemProps> = ({ paymentMethod, t }) => {
  return (
    <PaymentMethodItem paymentMethod={paymentMethod}>
      <Button variant={"primary"}>{t("component.button.placeOrder")}</Button>
    </PaymentMethodItem>
  );
};

export default withTranslation()(CashPaymentMethodItem);
