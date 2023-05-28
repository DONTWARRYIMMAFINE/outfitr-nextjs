"use client";

import SearchField from "@/components/common/Catalog/SearchBar/SearchField";
import SortSelect from "@/components/common/Catalog/SearchBar/SortSelect";
import { Box, Grid } from "@/components/ui";
import { isNotEmpty } from "@/lib/utils/string.utils";
import { usePathname, useRouter } from "next-intl/client";
import { useSearchParams } from "next/navigation";
import { FC, useState } from "react";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState<string>(searchParams.get("searchQuery") || "");

  const onSearchClick = () => {
    const params = new URLSearchParams(searchParams);

    isNotEmpty(value) ?
      params.set("searchQuery", value) :
      params.delete("searchQuery");

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Box padding={4} borderRadius={0.5} bgcolor={"background.body"}>
      <Grid container spacing={4}>
        <Grid item xs={10}>
          <SearchField value={value} onChange={setValue} onClick={onSearchClick} />
        </Grid>
        <Grid item xs={2}>
          <SortSelect />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
