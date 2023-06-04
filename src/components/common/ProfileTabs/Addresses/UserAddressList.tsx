"use client";

import AddUserDeliveryAddressCollapsable from "@/components/common/AddUserDeliveryAddressCollapsable";
import UserAddress from "@/components/common/ProfileTabs/Addresses/UserAddress";
import UserAddressPagination from "@/components/common/ProfileTabs/Addresses/UserAddressPagination";
import { Box, Error } from "@/components/ui";
import { useUserAddressesQuery } from "@/lib/graphql/schema.generated";
import { FC } from "react";

interface UserAddressListProps {}

const UserAddressList: FC<UserAddressListProps> = ({}) => {
  const { data, loading, error } = useUserAddressesQuery();

  if (error) return <Error message={error.message} />;
  if (loading || !data) return null;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <AddUserDeliveryAddressCollapsable />
      {data.userAddresses.nodes.map(userAddress => (
        <UserAddress key={userAddress.id} userAddress={userAddress} />
      ))}
      <UserAddressPagination />
    </Box>
  );
};

export default UserAddressList;
