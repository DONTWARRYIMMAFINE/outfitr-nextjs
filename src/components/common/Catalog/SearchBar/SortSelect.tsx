"use client";

import { Select, SelectOption } from "@/components/common";
import { Icons } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { ProductSort, ProductSortFields, SortDirection } from "@/lib/graphql/schema.generated";
import { FC, useMemo } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface SortOption extends ProductSort, Omit<SelectOption, "label" | "value"> {}

const sortOptions: SortOption[] = [
  {
    IconComponent: Icons.Sort,
    field: ProductSortFields.CreatedAt,
    direction: SortDirection.Desc,
  },
  {
    IconComponent: Icons.Sort,
    field: ProductSortFields.CreatedAt,
    direction: SortDirection.Asc,
  },
];

interface SortMenuProps extends WithTranslation {
  field: ProductSortFields;
  direction: SortDirection;
  onChange: (value: ProductSort) => void;
}

const SortSelect: FC<SortMenuProps> = ({ field, direction, onChange, t }) => {
  const options = useMemo(() => {
    return sortOptions.map(option => {
      return {
        ...option,
        label: t(`content.sort.${option.field}.${option.direction.toLowerCase()}`),
        value: JSON.stringify({
          field: option.field,
          direction: option.direction,
        }),
      } as SelectOption;
    });
  }, [t]);

  console.log("sort", JSON.stringify({ field, direction }));

  return (
    <Select
      value={JSON.stringify({ field, direction })}
      options={options}
      onChange={value => onChange(JSON.parse(value))}
      fullWidth
    />
  );
};

export default withTranslation(I18NS.Catalog)(SortSelect);
