"use client";

import UpdateBrandForm from "@/components/common/forms/UpdateBrandForm";
import { Box, Container, Text } from "@/components/ui";
import { BrandFragment, UpdateOneBrandInput } from "@/lib/graphql/schema.generated";
import { Modal } from "@mui/material";
import React, { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface EditBrandModalProps extends WithTranslation {
  open: boolean;
  setOpen: (open: boolean) => void;
  brand: BrandFragment;
  onSaveClick: (values: UpdateOneBrandInput["update"]) => void;
}

const EditBrandModal: FC<EditBrandModalProps> = ({ open, setOpen, brand, onSaveClick, t }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} keepMounted>
      <Container maxWidth={"md"}>
        <Box display={"flex"} flexDirection={"column"} bgcolor={"background.body"} padding={4} borderRadius={0.5} gap={4}>
          <Text variant={"h4"} opacity={0.7}>{t("component.modal.editBrand.title")}</Text>
          <UpdateBrandForm brand={brand} onSubmit={onSaveClick} />
        </Box>
      </Container>
    </Modal>
  );
};

export default withTranslation()(EditBrandModal);
