"use client";

import UpdateAddressForm from "@/components/common/forms/UpdateAddressForm";
import { Box, Container, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { AddressFragment, UpdateUserAddressInput } from "@/lib/graphql/schema.generated";
import { Modal } from "@mui/material";
import React, { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface EditAddressModalProps extends WithTranslation {
  open: boolean;
  setOpen: (open: boolean) => void;
  address: AddressFragment;
  onSaveClick: (values: UpdateUserAddressInput["address"]) => void;
}

const EditAddressModal: FC<EditAddressModalProps> = ({ open, setOpen, address, onSaveClick, t }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} keepMounted>
      <Container maxWidth={"md"}>
        <Box display={"flex"} flexDirection={"column"} bgcolor={"background.body"} padding={4} borderRadius={0.5} gap={4}>
          <Text variant={"h4"} opacity={0.7}>{t("tabs.addresses.modal.title")}</Text>
          <UpdateAddressForm address={address} onSubmit={onSaveClick} />
        </Box>
      </Container>
    </Modal>
  );
};

export default withTranslation(I18NS.Profile)(EditAddressModal);
