import { API_URL } from "@/constants/urls";
import { LogoutDocument, ReissueAccessTokenDocument } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
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

const accessLink = setContext((_, { headers, ...context }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
    ...context,
  };
});

const refreshLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors?.length && (graphQLErrors[0].extensions?.response as any)?.statusCode === 401) {
    console.log("[ERROR DETECTED]");
    const client = getClient();
    client.query({ query: ReissueAccessTokenDocument })
      .then(({ data, error }) => {
        if (data && !error) {
          console.log("[ACCESS TOKEN REISSUED]");
          const token = data?.reissueAccessToken.accessToken;
          localStorage.setItem("token", token);
        } else {
          console.log("[FAIL]");
          client.mutate({ mutation: LogoutDocument }).then(() => {
            console.log("[CLEARED DATA]");
            localStorage.removeItem("token");
            loggedInUser(null);
          });
        }
      }).catch(err => console.log("err", err));
  }
});

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
  credentials: "include",
});

const authLink = refreshLink.concat(accessLink);

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: from([errorLink, accessLink, authLink, httpLink]),
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
