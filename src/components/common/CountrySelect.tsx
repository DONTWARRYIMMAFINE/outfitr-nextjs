"use client";

import Select, { SelectOption, SelectProps } from "@/components/common/Select";
import Error from "@/components/ui/Error";
import { CountryFragment, useCountriesQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { map } from "lodash";
import { FC } from "react";

function toSelectOption(country: CountryFragment): SelectOption {
  return {
    label: country.name,
    value: country.id,
  };
}

interface CountrySelectProps extends Omit<SelectProps, "options"> {}

const CountrySelect: FC<CountrySelectProps> = ({ value, onChange, ...props }) => {
  const { data, loading, error } = useCountriesQuery({
    onCompleted: data => onChange && onChange(data.countries.nodes[0].id),
  });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton height={120} />;

  return (
    <Select
      variant={"outlined"}
      value={value}
      options={map(data.countries.nodes, toSelectOption)}
      onChange={onChange}
      {...props}
    />
  );
};

export default CountrySelect;
