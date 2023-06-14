"use client";

import Select, { SelectOption, SelectProps } from "@/components/common/Select";
import { BrandFragment, useBrandsQuery } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { Skeleton } from "@mui/material";
import { map } from "lodash";
import { FC } from "react";
import Error from "../ui/Error";

function toSelectOption(brand: BrandFragment): SelectOption {
  return {
    label: brand.name,
    value: brand.id,
  };
}

interface BrandSelectProps extends Omit<SelectProps, "options"> {}

const BrandSelect: FC<BrandSelectProps> = ({ value, onChange, ...props }) => {
  const user = useReactiveVar(loggedInUser);
  const { data, loading, error } = useBrandsQuery({
    onCompleted: ({ brands }) => onChange && onChange(brands.nodes[0].id),
    variables: {
      filter: {
        userId: {
          eq: user?.id,
        },
      },
    },
  });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <Select
      variant={"outlined"}
      value={value}
      options={map(data.brands.nodes, toSelectOption)}
      onChange={onChange}
      {...props}
    />
  );
};

export default BrandSelect;
