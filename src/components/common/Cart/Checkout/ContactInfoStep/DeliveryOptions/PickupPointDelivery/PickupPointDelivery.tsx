import DeliveryOption, { DeliveryOptionProps } from "@/components/common/Cart/Checkout/ContactInfoStep/DeliveryOptions/DeliveryOption";
import { FC } from "react";

interface PickupPointDeliveryProps extends Omit<DeliveryOptionProps, "children"> {}

const PickupPointDelivery: FC<PickupPointDeliveryProps> = (props) => {
  return (
    <DeliveryOption {...props}>
      PickupPointDelivery
    </DeliveryOption>
  );
};

export default PickupPointDelivery;
