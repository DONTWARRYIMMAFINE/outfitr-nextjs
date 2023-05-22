"use client";

import { Box, Text } from "@/components/ui";
import { useColorsQuery, useColorsTotalCountQuery } from "@/lib/graphql/schema.generated";
import { Pagination } from "@mui/lab";
import { FC, useState } from "react";

interface ColorListProps {}

const ColorList: FC<ColorListProps> = ({}) => {
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const { loading: totalLoading } = useColorsTotalCountQuery({
    onCompleted: data => setPageCount(Math.ceil(data.colors.totalCount / limit)),
  });

  const { data, error, loading, refetch } = useColorsQuery({
    variables: {
      paging: {
        limit,
        offset,
      },
    },
  });

  if (loading || totalLoading || !data) {
    return <Box>Loading colors...</Box>;
  }

  if (error) {
    return <Box>Error fetching colors...</Box>;
  }

  const onChange = async (page: number) => {
    setOffset((page - 1) * limit);
    await refetch();
  };

  return (
    <Box>
      {data?.colors.nodes.map(({ id, name, hex }) => (
        <Box key={id}>
          <Text>{name}</Text>
          <Text>{hex}</Text>
        </Box>
      ))}
      <Pagination
        count={pageCount}
        page={offset / limit + 1}
        size={"large"}
        onChange={(e, page) => onChange(page)}
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

export default ColorList;
