"use client";

import { Box, Text } from "@/components/ui";
import { useCountriesQuery } from "@/lib/graphql/schema.generated";

interface CountryListProps {}

const CountryListClient = ({}) => {
  const { data, loading, error } = useCountriesQuery();

  if (loading) {
    return (
      <Box>
        <Text>Loading</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Text>Failed</Text>
      </Box>
    );
  }

  if (data?.countries.nodes.length === 0) {
    return (
      <Box>
        <Text>No countries yet</Text>
      </Box>
    );
  }

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      {data?.countries.nodes.map(({ id, code, name }) => (
        <Box key={id}>
          <Text>{id}</Text>
          <Text>{code}</Text>
          <Text>{name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default CountryListClient;
