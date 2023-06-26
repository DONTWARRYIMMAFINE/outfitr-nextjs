"use client";

import { Select, SelectOption, SelectProps } from "@/components/common";
import { CategoryFragment, useCategoryTreeQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { flatMap } from "lodash";
import { FC } from "react";
import Error from "../ui/Error";

function toSelectOption(category: CategoryFragment & { children?: CategoryFragment[] }, header?: boolean): SelectOption[] {
  return [{
    label: category.name!,
    value: category.id!,
    header,
  }, ...flatMap(category.children, c => toSelectOption(c))];
}

interface CategorySelectProps extends Omit<SelectProps, "options"> {}

const CategorySelect: FC<CategorySelectProps> = ({ value, onChange, ...props }) => {
  const { data, loading, error } = useCategoryTreeQuery();

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <Select
      variant={"outlined"}
      value={value}
      options={flatMap(data.categoryTree[0].children, c => toSelectOption(c as any, true))}
      onChange={onChange}
      {...props}
    />
  );
};

export default CategorySelect;
