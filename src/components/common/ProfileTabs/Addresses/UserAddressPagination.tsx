"use client";

import { Error } from "@/components/ui";
import { useUserAddressesTotalCountQuery } from "@/lib/graphql/schema.generated";
import { parseIntOrDefault } from "@/lib/utils/parser.utils";
import { Pagination } from "@mui/lab";
import { usePathname, useRouter } from "next-intl/client";
import { useSearchParams } from "next/navigation";
import { FC, useState } from "react";

interface UserAddressPaginationProps {}

const UserAddressPagination: FC<UserAddressPaginationProps> = ({}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [limit, setLimit] = useState<number>(50);
  const [offset, setOffset] = useState<number>(parseIntOrDefault(searchParams.get("offset")));
  const [pageCount, setPageCount] = useState<number>(0);

  const { data, loading, error } = useUserAddressesTotalCountQuery({
    onCompleted: data => setPageCount(Math.ceil(data.userAddresses.totalCount / limit)),
  });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return null;

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
      sx={{ mt: "auto" }}
    />
  );
};

export default UserAddressPagination;
