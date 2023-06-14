"use client";

import EditBrandModal from "@/components/common/PartnerTabs/BrandsTab/EditBrandModal";
import { Box, Button, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { BrandFragment, BrandsDocument, UpdateBrandInput, useDeleteOneBrandMutation, useUpdateOneBrandMutation } from "@/lib/graphql/schema.generated";
import { useConfirm } from "material-ui-confirm";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface BrandProps extends WithTranslation {
  brand: BrandFragment;
}

const Brand: FC<BrandProps> = ({ brand, t }) => {
  const confirm = useConfirm();

  const [updateOneBrandMutation] = useUpdateOneBrandMutation();
  const [deleteOneBrandMutation] = useDeleteOneBrandMutation();
  const [open, setOpen] = useState(false);

  const onEditClick = async (brandId: string, values: UpdateBrandInput) => {
    await updateOneBrandMutation({
      onCompleted: _ => toast.success(t("tabs.brands.button.edit.success")),
      onError: error => toast.error(t("tabs.brands.button.edit.error", { message: error.message })),
      refetchQueries: [BrandsDocument],
      variables: {
        input: {
          id: brandId,
          update: values,
        },
      },
    });
  };

  const onDeleteClick = async (brandId: string) => {
    confirm().then(async () => {
      await deleteOneBrandMutation({
        onCompleted: _ => toast.success(t("tabs.brands.button.delete.success")),
        onError: error => toast.error(t("tabs.brands.button.delete.error", { message: error.message })),
        refetchQueries: [BrandsDocument],
        variables: {
          input: {
            id: brandId,
          },
        },
      });
    });
  };

  return (
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} padding={2} bgcolor={"background.textField"} borderRadius={1}>
      <Text variant={"p"}>{brand.name}</Text>
      <Box display={"flex"} gap={2}>
        <Button
          variant={"transparent"}
          sx={{ color: "primary.contrastText", bgcolor: "warning.light" }}
          onClick={() => setOpen(true)}
        >
          {t("tabs.brands.button.edit.label")}
        </Button>
        <Button
          variant={"transparent"}
          sx={{ color: "primary.contrastText", bgcolor: "error.light" }}
          onClick={() => onDeleteClick(brand.id)}
        >
          {t("tabs.brands.button.delete.label")}
        </Button>
      </Box>
      <EditBrandModal
        open={open}
        setOpen={setOpen}
        brand={brand}
        onSaveClick={values => onEditClick(brand.id, values)}
      />
    </Box>
  );
};

export default withTranslation(I18NS.Partner)(Brand);
