"use client";

import Address from "@/components/common/Address";
import EditAddressModal from "@/components/common/ProfileTabs/Addresses/EditAddressModal";
import { Box } from "@/components/ui";
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

interface UserAddressProps {
  userAddress: UserAddressFragment;
}

const UserAddress: FC<UserAddressProps> = ({ userAddress }) => {
  const confirm = useConfirm();

  const [updateOneUserAddressMutation] = useUpdateOneUserAddressMutation();
  const [deleteOneUserAddressMutation] = useDeleteOneUserAddressMutation();
  const [open, setOpen] = useState(false);

  const onEditClick = async (userAddressId: string, values: UpdateUserAddressInput["address"]) => {
    await updateOneUserAddressMutation({
      onCompleted: _ => toast.success("Address deleted successfully"),
      onError: _ => toast.error("Unable to delete address"),
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
        onCompleted: _ => toast.success("Address deleted successfully"),
        onError: _ => toast.error("Unable to delete address"),
        refetchQueries: [UserAddressesDocument],
        variables: {
          input: {
            id: userAddressId,
          },
        },
      });
    });
  };

  return (
    <Box key={userAddress.id}>
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
    </Box>
  );
};

export default UserAddress;
