"use client";

import { Box } from "@/components/ui";
import { useProductsTotalCountQuery } from "@/lib/graphql/schema.generated";
import { parseIntOrDefault } from "@/lib/utils/parser.utils";
import { Pagination } from "@mui/lab";
import { usePathname, useRouter } from "next-intl/client";
import { useSearchParams } from "next/navigation";
import { FC, useState } from "react";

interface ProductPaginationProps {}

const ProductPagination: FC<ProductPaginationProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [limit, setLimit] = useState<number>(12);
  const [offset, setOffset] = useState<number>(parseIntOrDefault(searchParams.get("offset")));
  const [pageCount, setPageCount] = useState<number>(0);

  const { data, loading, error } = useProductsTotalCountQuery({
    onCompleted: data => setPageCount(Math.ceil(data.products.totalCount / limit)),
  });

  if (loading || !data) return <Box>Loading...</Box>;
  if (error) return <Box>Error...</Box>;

  const onChange = (page: number) => {
    setOffset((page - 1) * limit);
    const params = new URLSearchParams(searchParams);
    params.set("limit", limit.toString());
    params.set("offset", offset.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      count={pageCount}
      page={offset / limit + 1}
      onChange={(e, page) => onChange(page)}
      size={"large"}
      variant={"outlined"}
      color={"primary"}
      showFirstButton
      showLastButton
    />
  );
};

export default ProductPagination;
