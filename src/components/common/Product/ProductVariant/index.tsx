"use client";

import Price from "@/components/common/Price";
import ChangeStockModal from "@/components/common/Product/ProductVariant/ChangeStockModal";
import { Box, Button, Grid, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import {
  ProductsDocument,
  ProductVariantFragment,
  SetWarehouseItemsInWarehouseMutationVariables,
  useDeleteOneProductVariantMutation,
  useSetWarehouseItemsInWarehouseMutation,
  WarehouseItemDocument,
  WarehousesDocument,
} from "@/lib/graphql/schema.generated";
import { useConfirm } from "material-ui-confirm";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface ProductVariantProps extends WithTranslation {
  productVariant: ProductVariantFragment;
}

const ProductVariant: FC<ProductVariantProps> = ({ productVariant, t }) => {
  const confirm = useConfirm();
  const [setWarehouseItemsInWarehouseMutation] = useSetWarehouseItemsInWarehouseMutation();
  const [deleteOneProductVariantMutation] = useDeleteOneProductVariantMutation();
  const [openChangeStockModal, setOpenChangeStockModal] = useState(false);

  const onChangeStockClick = async (values: SetWarehouseItemsInWarehouseMutationVariables["input"]) => {
    await setWarehouseItemsInWarehouseMutation({
      onCompleted: _ => toast.success(t("content.modal.changeStock.success")),
      onError: error => toast.error(t("content.modal.changeStock.error", { message: error.message })),
      variables: {
        input: values
      }
    });
  };

  const onDeleteClick = async (productVariantId: string) => {
    confirm().then(async () => {
      await deleteOneProductVariantMutation({
        onCompleted: _ => toast.success(t("content.variant.button.delete.success", { sku: productVariant.sku })),
        onError: error => toast.error(t("content.variant.button.delete.error", { sku: productVariant.sku, message: error.message })),
        refetchQueries: [ProductsDocument],
        variables: {
          input: {
            id: productVariantId,
          },
        },
      });
    });
  };

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
      <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
        <Box display={"flex"} flexDirection={"column"}>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Text variant={"p"} opacity={0.7}>{t("content.variant.sku.label")}</Text>
            <Text variant={"p"}>{productVariant.sku}</Text>
          </Box>
          <Price fontSize={24} amount={productVariant.price.amount} currency={productVariant.price.currency} />
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} gap={1}>
              <Text variant={"small"} opacity={0.7}>{t("content.variant.color.label")}:</Text>
              <Text variant={"small"} color={"primary"}>{productVariant.color.name}</Text>
            </Box>
            <Box display={"flex"} gap={1}>
              <Text variant={"small"} opacity={0.7}>{t("content.variant.size.label")}:</Text>
              <Text variant={"small"} color={"primary"}>{productVariant.size.name}</Text>
            </Box>
            <Box display={"flex"} gap={1}>
              <Text variant={"small"} opacity={0.7}>{t("content.variant.stock.label")}:</Text>
              <Text variant={"small"} color={"primary"}>{productVariant.stock}</Text>
            </Box>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Button
              variant={"transparent"}
              sx={{ color: "primary.contrastText", bgcolor: "info.light" }}
              onClick={() => setOpenChangeStockModal(true)}
            >
              {t("content.variant.button.changeStock.label")}
            </Button>
            <Button
              variant={"transparent"}
              sx={{ color: "primary.contrastText", bgcolor: "warning.light" }}
            >
              {t("content.variant.button.edit.label")}
            </Button>
            <Button
              variant={"transparent"}
              sx={{ color: "primary.contrastText", bgcolor: "error.light" }}
              onClick={() => onDeleteClick(productVariant.id)}
            >
              {t("content.variant.button.delete.label")}
            </Button>
          </Box>
        </Box>
      </Box>
      <ChangeStockModal
        open={openChangeStockModal}
        setOpen={setOpenChangeStockModal}
        productVariant={productVariant}
        onChangeClick={onChangeStockClick}
      />
    </Box>
  );
};

export default withTranslation(I18NS.Product)(ProductVariant);
