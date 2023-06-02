"use client";

import Select, { SelectOption, SelectProps } from "@/components/common/Select";
import Error from "@/components/ui/Error";
import { CityFragment, useCitiesQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { map } from "lodash";
import { FC } from "react";
import toast from "react-hot-toast";

function toSelectOption(City: CityFragment): SelectOption {
  return {
    label: City.name,
    value: City.id,
  };
}

interface CitySelectProps extends Omit<SelectProps, "options"> {
  country: string;
}

const CitySelect: FC<CitySelectProps> = ({ value, onChange, country, ...props }) => {
  const { data, loading, error } = useCitiesQuery({
    onCompleted: data => onChange && onChange(data.cities.nodes[0].id),
    onError: _ => toast.error("Unable to fetch cities"),
    variables: {
      filter: {
        countryId: {
          eq: country,
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
      options={map(data.cities.nodes, toSelectOption)}
      onChange={onChange}
      {...props}
    />
  );
};

export default CitySelect;
