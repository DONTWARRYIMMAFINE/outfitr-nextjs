"use client";

import { AddUserDeliveryAddressCollapsable } from "@/components/common";
import { Box, Error, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useUserAddressesQuery } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import UserAddress from "./UserAddress";
import UserAddressPagination from "./UserAddressPagination";

interface UserAddressListProps extends WithTranslation {}

const UserAddressList: FC<UserAddressListProps> = ({ t }) => {
  const { data, loading, error } = useUserAddressesQuery();

  if (error) return <Error message={error.message} />;
  if (loading || !data) return null;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <AddUserDeliveryAddressCollapsable />
      {data.userAddresses.nodes.length !== 0 ? <>
          {data.userAddresses.nodes.map(userAddress => (
            <UserAddress key={userAddress.id} userAddress={userAddress} />
          ))}
          <UserAddressPagination />
        </> :
        <Text variant={"p"}>{t("tabs.addresses.empty")}</Text>
      }
    </Box>
  );
};

export default withTranslation(I18NS.Profile)(UserAddressList);
