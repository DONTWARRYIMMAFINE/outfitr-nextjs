"use client";

import HomeDelivery from "@/components/common/Cart/Checkout/ContactInfoStep/DeliveryOptions/HomeDelivery";
import PickupPointDelivery from "@/components/common/Cart/Checkout/ContactInfoStep/DeliveryOptions/PickupPointDelivery/PickupPointDelivery";
import { Box, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { FC, useState } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface DeliveryOptionsProps extends WithTranslation {}

const DeliveryOptions: FC<DeliveryOptionsProps> = ({ t }) => {
  const [deliveryOption, setDeliveryOption] = useState(0);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"} opacity={0.7}>
        {t("content.steps.contactInfo.deliveryOptions.label")}
      </Text>
      <RadioGroup
        aria-labelledby={"delivery-options-buttons-group-label"}
        name={"delivery-options-radio-buttons-group"}
        defaultValue={deliveryOption}
        onChange={(_, value) => setDeliveryOption(parseInt(value))}
        row
      >
        <FormControlLabel value={0} control={<Radio />} label={t("content.steps.contactInfo.deliveryOptions.homeDelivery")} />
        <FormControlLabel value={1} control={<Radio />} label={t("content.steps.contactInfo.deliveryOptions.pickupPointDelivery")} />
      </RadioGroup>
      <Box>
        <HomeDelivery index={deliveryOption} value={0} />
        <PickupPointDelivery index={deliveryOption} value={1} />
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.Checkout)(DeliveryOptions);
