import { Box, Text } from "@/components/ui";
import { getClient } from "@/lib/graphql/apollo-client";
import { CountriesDocument, CountriesQuery, CountriesQueryVariables } from "@/lib/graphql/schema.generated";

interface CountryListProps {}

const CountryListServer = async ({}) => {
  const apolloClient = getClient();
  apolloClient.link = apolloClient.link
  const { data, loading, error } = await apolloClient.query<
    CountriesQuery,
    CountriesQueryVariables
  >({
    query: CountriesDocument,
  });

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

  if (data?.countries.edges.length === 0) {
    return (
      <Box>
        <Text>No countries yet</Text>
      </Box>
    );
  }

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      {data?.countries.edges.map(({ node }) => (
        <Box key={node.id}>
          <Text>{node.id}</Text>
          <Text>{node.code}</Text>
          <Text>{node.name}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default CountryListServer;
