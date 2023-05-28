import { FC, PropsWithChildren } from "react";

export interface DeliveryOptionProps extends PropsWithChildren {
  index: number;
  value: number;
}

const DeliveryOption: FC<DeliveryOptionProps> = ({ index, value, children }) => {
  return (<>
    {index === value && children}
  </>);
};

export default DeliveryOption;
