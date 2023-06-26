"use client";

import { Select, SelectOption, SelectProps } from "@/components/common";
import { Error } from "@/components/ui";
import { useWarehousesQuery, WarehouseFragment } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { map } from "lodash";
import { FC } from "react";

function toSelectOption(warehouse: WarehouseFragment): SelectOption {
  return {
    label: warehouse.name,
    value: warehouse.id,
  };
}

interface WarehouseSelectProps extends Omit<SelectProps, "options"> {}

const WarehouseSelect: FC<WarehouseSelectProps> = ({ value, onChange, ...props }) => {
  const { data, loading, error } = useWarehousesQuery({
    onCompleted: ({ warehouses }) => onChange && onChange(value ? value : warehouses.nodes[0].id),
  });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <Select
      variant={"outlined"}
      value={value}
      options={map(data?.warehouses.nodes, toSelectOption)}
      onChange={onChange}
      {...props}
    />
  );
};

export default WarehouseSelect;
