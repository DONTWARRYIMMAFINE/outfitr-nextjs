import { API_URL } from "@/constants/urls";
import { ApolloClient, from, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

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

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

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
      link: from([errorLink, authLink, httpLink]),
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
