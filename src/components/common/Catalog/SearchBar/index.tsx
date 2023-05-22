"use client";

import SearchField from "@/components/common/Catalog/SearchBar/SearchField";
import SortSelect from "@/components/common/Catalog/SearchBar/SortSelect";
import { Box } from "@/components/ui";
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
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      padding={3}
      borderRadius={0.5}
      bgcolor={"background.body"}
      gap={3}
    >
      <SearchField value={value} onChange={setValue} onClick={onSearchClick} />
      <SortSelect />
    </Box>
  );
};

export default SearchBar;
