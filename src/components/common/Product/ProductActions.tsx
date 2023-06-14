"use client";

import { Box, Button, Icons, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { ProductFragment, ProductsDocument, useDeleteOneProductMutation } from "@/lib/graphql/schema.generated";
import { useConfirm } from "material-ui-confirm";
import { FC } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface ProductActionsProps extends WithTranslation {
  product: ProductFragment;
}

const ProductActions: FC<ProductActionsProps> = ({ product, t }) => {
  const confirm = useConfirm();

  const [deleteOneProductMutation] = useDeleteOneProductMutation();

  const onDeleteClick = async (productId: string) => {
    confirm().then(async () => {
      await deleteOneProductMutation({
        onCompleted: _ => toast.success(t("content.productActions.button.delete.success")),
        onError: error => toast.error(t("content.productActions.button.delete.error", { message: error.message })),
        refetchQueries: [ProductsDocument],
        variables: {
          input: {
            id: productId,
          },
        },
      });
    });
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"p"} opacity={0.7}>{t("content.productActions.label")}</Text>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Button
          variant={"transparent"}
          startIcon={<Icons.Promote />}
          sx={{ bgcolor: "warning.light" }}
        >
          {t("content.productActions.button.promote.label")}
        </Button>
        <Button
          variant={"transparent"}
          onClick={() => onDeleteClick(product.id)}
          startIcon={<Icons.Reject />}
          sx={{ bgcolor: "error.light" }}
        >
          {t("content.productActions.button.delete.label")}
        </Button>
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.Product)(ProductActions);
