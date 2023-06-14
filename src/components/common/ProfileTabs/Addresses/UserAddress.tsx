"use client";

import Address from "@/components/common/Address";
import EditAddressModal from "@/components/common/ProfileTabs/Addresses/EditAddressModal";
import { I18NS } from "@/constants/I18NS";
import {
  UpdateUserAddressInput,
  useDeleteOneUserAddressMutation,
  UserAddressesDocument,
  UserAddressFragment,
  useUpdateOneUserAddressMutation,
} from "@/lib/graphql/schema.generated";
import { useConfirm } from "material-ui-confirm";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface UserAddressProps extends WithTranslation {
  userAddress: UserAddressFragment;
}

const UserAddress: FC<UserAddressProps> = ({ userAddress, t }) => {
  const confirm = useConfirm();

  const [updateOneUserAddressMutation] = useUpdateOneUserAddressMutation();
  const [deleteOneUserAddressMutation] = useDeleteOneUserAddressMutation();
  const [open, setOpen] = useState(false);

  const onEditClick = async (userAddressId: string, values: UpdateUserAddressInput["address"]) => {
    await updateOneUserAddressMutation({
      onCompleted: _ => toast.success(t("tabs.addresses.button.edit.success")),
      onError: error => toast.error(t("tabs.addresses.button.edit.error", { message: error.message })),
      refetchQueries: [UserAddressesDocument],
      variables: {
        input: {
          id: userAddressId,
          update: { address: values },
        },
      },
    });
  };

  const onDeleteClick = async (userAddressId: string) => {
    confirm().then(async () => {
      await deleteOneUserAddressMutation({
        onCompleted: _ => toast.success(t("tabs.addresses.button.delete.success")),
        onError: error => toast.error(t("tabs.addresses.button.delete.error", { message: error.message })),
        refetchQueries: [UserAddressesDocument],
        variables: {
          input: {
            id: userAddressId,
          },
        },
      });
    });
  };

  return (<>
    <Address
      address={userAddress.address}
      onEditClick={() => setOpen(true)}
      onDeleteClick={() => onDeleteClick(userAddress.id)}
    />
    <EditAddressModal
      open={open}
      setOpen={setOpen}
      address={userAddress.address}
      onSaveClick={values => onEditClick(userAddress.id, values)}
    />
  </>);
};

export default withTranslation(I18NS.Profile)(UserAddress);
