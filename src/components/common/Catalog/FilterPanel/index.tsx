"use client";

import BrandsFilter from "@/components/common/Catalog/FilterPanel/BrandsFilter";
import ColorsFilter from "@/components/common/Catalog/FilterPanel/ColorsFilter";
import PriceFilter from "@/components/common/Catalog/FilterPanel/PriceFilter";
import SizesFilter from "@/components/common/Catalog/FilterPanel/SizesFilter";
import { Box, Button, Divider } from "@/components/ui";
import { isNotEmpty } from "@/lib/utils/string.utils";
import { usePathname, useRouter } from "next-intl/client";
import { useSearchParams } from "next/navigation";
import { FC, useState } from "react";

export interface FilterPanelProps {}

const FilterPanel: FC<FilterPanelProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(searchParams.get("brands")?.split(",") || []);
  const [selectedColors, setSelectedColors] = useState<string[]>(searchParams.get("colors")?.split(",") || []);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(searchParams.get("sizes")?.split(",") || []);

  const handleFilterChange = (value: string, selected: string[], setSelected: (selected: string[]) => void) => {
    const exists = selected ? selected?.indexOf(value) > -1 : false;
    const sizes = exists ? selected?.filter(s => s !== value) : [...selected, value];
    setSelected(sizes);
  };

  const handleApplyFilter = () => {
    const params = new URLSearchParams(searchParams);

    const priceRangeQuery = priceRange.join(",");
    const selectedBrandsQuery = selectedBrands.join(",");
    const selectedColorsQuery = selectedColors.join(",");
    const selectedSizesQuery = selectedSizes.join(",");

    isNotEmpty(priceRangeQuery) ?
      params.set("price", priceRangeQuery) :
      params.delete("price");
    isNotEmpty(selectedBrandsQuery) ?
      params.set("brands", selectedBrandsQuery) :
      params.delete("brands");
    isNotEmpty(selectedColorsQuery) ?
      params.set("colors", selectedColorsQuery) :
      params.delete("colors");
    isNotEmpty(selectedSizesQuery) ?
      params.set("sizes", selectedSizesQuery) :
      params.delete("sizes");

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      padding={3}
      borderRadius={0.5}
      gap={2}
      bgcolor={"background.body"}
    >
      <PriceFilter
        value={priceRange}
        handleChange={setPriceRange}
      />
      <Divider light flexItem />
      <BrandsFilter
        selectedValues={selectedBrands}
        handleFilterChange={value => handleFilterChange(value, selectedBrands, setSelectedBrands)}
      />
      <Divider light flexItem />
      <ColorsFilter
        selectedValues={selectedColors}
        handleFilterChange={value => handleFilterChange(value, selectedColors, setSelectedColors)}
      />
      <Divider light flexItem />
      <SizesFilter
        selectedValues={selectedSizes}
        handleFilterChange={value => handleFilterChange(value, selectedSizes, setSelectedSizes)}
      />
      <Divider light flexItem />
      <Button variant={"primary"} onClick={handleApplyFilter}>
        Apply Filters
      </Button>
    </Box>
  );
};

export default FilterPanel;
