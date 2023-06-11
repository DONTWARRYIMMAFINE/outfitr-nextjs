"use client";

import SearchField from "@/components/common/Catalog/SearchBar/SearchField";
import SortSelect from "@/components/common/Catalog/SearchBar/SortSelect";
import { Box, Grid } from "@/components/ui";
import { ProductSort, ProductSortFields, SortDirection } from "@/lib/graphql/schema.generated";
import { isNotEmpty } from "@/lib/utils/string.utils";
import { usePathname, useRouter } from "next-intl/client";
import { useSearchParams } from "next/navigation";
import { FC, useState } from "react";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get("searchQuery") || "");
  const [field, setField] = useState<ProductSortFields>(searchParams.get("field") as ProductSortFields);
  const [direction, setDirection] = useState<SortDirection>(searchParams.get("direction") as SortDirection);

  const onSearchClick = () => {
    const params = new URLSearchParams(searchParams);

    isNotEmpty(searchQuery) ?
      params.set("searchQuery", searchQuery) :
      params.delete("searchQuery");

    router.replace(`${pathname}?${params.toString()}`);
  };

  const onSortChange = (value: ProductSort) => {
    setField(value.field);
    setDirection(value.direction);

    const params = new URLSearchParams(searchParams);

    isNotEmpty(value.field) ?
      params.set("field", value.field) :
      params.delete("field");
    isNotEmpty(value.direction) ?
      params.set("direction", value.direction) :
      params.delete("direction");

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Box padding={4} borderRadius={0.5} bgcolor={"background.body"}>
      <Grid container spacing={4}>
        <Grid item xs={9}>
          <SearchField value={searchQuery} onChange={setSearchQuery} onClick={onSearchClick} />
        </Grid>
        <Grid item xs={3}>
          <SortSelect field={field} direction={direction} onChange={onSortChange} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
