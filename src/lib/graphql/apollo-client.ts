import { API_URL } from "@/constants/urls";
import { ApolloClient, from, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getSession } from "next-auth/react";
import { useMemo } from "react";

let client: ApolloClient<NormalizedCacheObject> | null = null;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// const authLink = setContext(async (_, { headers }: { headers: Headers }) => {
//   const session = await getSession();
//   const modifiedHeader = {
//     headers: {
//       ...headers,
//       authorization: session?.accessToken
//         ? `Bearer ${session.accessToken}`
//         : "",
//     },
//   };
//   return modifiedHeader;
// });

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: "include",
});

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: from([errorLink, httpLink]),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-and-network",
          notifyOnNetworkStatusChange: true,
        },
      },
    });
  }

  return client;
};

export function useApollo() {
  return useMemo(() => getClient(), []);
}
