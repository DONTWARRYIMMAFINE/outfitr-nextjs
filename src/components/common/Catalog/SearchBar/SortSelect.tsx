"use client";

import Select, { SelectOption } from "@/components/common/Select";
import { Icons } from "@/components/ui";
import { ProductSort, ProductSortFields, SortDirection } from "@/lib/graphql/schema.generated";
import { FC, useState } from "react";

interface SortOption extends ProductSort, SelectOption {}

const sortOptions: SortOption[] = [
  {
    label: "New first",
    value: "sort_by_created_at_asc",
    IconComponent: Icons.Sort,
    field: ProductSortFields.CreatedAt,
    direction: SortDirection.Asc,
  },
  {
    label: "Old first",
    value: "sort_by_created_at_desc",
    IconComponent: Icons.Sort,
    field: ProductSortFields.CreatedAt,
    direction: SortDirection.Desc,
  },
];

interface SortMenuProps {}

const SortSelect: FC<SortMenuProps> = ({}) => {
  const [value, setValue] = useState<string>(sortOptions[0].value);

  return (
    <Select
      value={value}
      options={sortOptions}
      onChange={setValue}
      fullWidth
    />
  );
};

export default SortSelect;
