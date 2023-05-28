"use client";

import AddUserDeliveryAddressCollapsable from "@/components/common/AddUserDeliveryAddressCollapsable";
import DeliveryOption, { DeliveryOptionProps } from "@/components/common/Cart/Checkout/ContactInfoStep/DeliveryOptions/DeliveryOption";
import UserAddressSelect from "@/components/common/UserAddressSelect";
import { useUpdateOneCartMutation } from "@/lib/graphql/schema.generated";
import { userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import toast from "react-hot-toast";

interface HomeDeliveryProps extends Omit<DeliveryOptionProps, "children"> {}

const HomeDelivery: FC<HomeDeliveryProps> = (props) => {
  const cart = useReactiveVar(userCart);
  const [updateOneCartMutation] = useUpdateOneCartMutation();

  const onChange = async (id: string) => {
    await updateOneCartMutation({
      onCompleted: data => userCart(data.updateOneCart),
      onError: error => toast.error(error.message),
      variables: {
        input: {
          id: cart?.id!,
          update: {
            deliveryAddressId: id,
          },
        },
      },
    });
  };

  return (
    <DeliveryOption {...props}>
      <UserAddressSelect value={cart?.deliveryAddress?.id} onChange={onChange} />
      <AddUserDeliveryAddressCollapsable />
    </DeliveryOption>
  );
};

export default HomeDelivery;
