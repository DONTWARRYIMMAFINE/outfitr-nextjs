"use client";

import { Box, Button, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { AddressFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface UserAddressProps extends WithTranslation {
  address: AddressFragment;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const Address: FC<UserAddressProps> = ({ address, onEditClick, onDeleteClick, t }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgcolor={"background.textField"}
      border={0.25}
      borderColor={"background.component"}
      borderRadius={0.25}
      padding={2}
    >
      <Text variant={"p"}>{address.formattedAddress}</Text>
      <Box display={"flex"} gap={2}>
        <Button
          variant={"transparent"}
          sx={{ color: "primary.contrastText", bgcolor: "warning.light" }}
          onClick={onEditClick}
        >
          {t("tabs.addresses.button.edit.label")}
        </Button>
        <Button
          variant={"transparent"}
          sx={{ color: "primary.contrastText", bgcolor: "error.light" }}
          onClick={onDeleteClick}
        >
          {t("tabs.addresses.button.delete.label")}
        </Button>
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.Profile)(Address);
