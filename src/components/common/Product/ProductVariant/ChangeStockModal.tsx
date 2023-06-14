import ChangeStockForm from "@/components/common/forms/ChangeStockForm";
import { Box, Container, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { ProductVariantFragment, SetWarehouseItemsInWarehouseMutationVariables } from "@/lib/graphql/schema.generated";
import { Modal } from "@mui/material";
import React, { FC } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface ChangeStockModalProps extends WithTranslation {
  open: boolean;
  setOpen: (open: boolean) => void;
  productVariant: ProductVariantFragment;
  onChangeClick: (values: SetWarehouseItemsInWarehouseMutationVariables["input"]) => void;
}

const ChangeStockModal: FC<ChangeStockModalProps> = ({ open, setOpen, productVariant, onChangeClick, t }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)} closeAfterTransition sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} keepMounted>
      <Container maxWidth={"md"}>
        <Box display={"flex"} flexDirection={"column"} bgcolor={"background.body"} padding={4} borderRadius={0.5} gap={4}>
          <Text variant={"h4"} opacity={0.7}>{t("content.modal.changeStock.title")}</Text>
          <ChangeStockForm productVariant={productVariant} onSubmit={onChangeClick} />
        </Box>
      </Container>
    </Modal>
  );
};

export default withTranslation(I18NS.Product)(ChangeStockModal);
