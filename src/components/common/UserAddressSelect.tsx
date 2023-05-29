"use client";

import Select, { SelectOption, SelectProps } from "@/components/common/Select";
import { Text, Error } from "@/components/ui";
import { UserAddressFragment, useUserAddressesQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { map } from "lodash";
import { FC } from "react";

function toSelectOption(userAddress: UserAddressFragment): SelectOption {
  return {
    label: userAddress.address.formattedAddress,
    value: userAddress.address.id,
  };
}

interface UserAddressSelectProps extends Omit<SelectProps, "options"> {}

const UserAddressSelect: FC<UserAddressSelectProps> = ({ value, onChange }) => {
  const { data, loading, error } = useUserAddressesQuery({
    onCompleted: data => onChange && onChange(data.userAddresses.nodes[0].address.id),
  });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton height={180} />;

  if (data.userAddresses.nodes.length === 0) {
    return <Text variant={"p"}>You don't have any delivery address yet</Text>;
  }

  return (
    <Select
      value={value}
      placeholder={"Choose delivery address"}
      options={map(data.userAddresses.nodes, toSelectOption)}
      onChange={onChange}
      fullWidth
    />
  );
};

export default UserAddressSelect;
