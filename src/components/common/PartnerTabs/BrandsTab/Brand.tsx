"use client";

import EditBrandModal from "@/components/common/PartnerTabs/BrandsTab/EditBrandModal";
import { Box, Button, Text } from "@/components/ui";
import { BrandFragment, BrandsDocument, UpdateOneBrandInput, useDeleteOneBrandMutation, UserAddressesDocument, useUpdateOneBrandMutation } from "@/lib/graphql/schema.generated";
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

  const onEditClick = async (brandId: string, values: UpdateOneBrandInput["update"]) => {
    await updateOneBrandMutation({
      onCompleted: _ => toast.success("Address deleted successfully"),
      onError: _ => toast.error("Unable to delete address"),
      refetchQueries: [UserAddressesDocument],
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
        onCompleted: _ => toast.success("Address deleted successfully"),
        onError: _ => toast.error("Unable to delete address"),
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
          {t("component.button.edit")}
        </Button>
        <Button
          variant={"transparent"}
          sx={{ color: "primary.contrastText", bgcolor: "error.light" }}
          onClick={() => onDeleteClick(brand.id)}
        >
          {t("component.button.delete")}
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

export default withTranslation()(Brand);
