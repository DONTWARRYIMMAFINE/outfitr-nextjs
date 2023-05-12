import { LOCAL_STORAGE_TOKEN } from "@/constants/token";
import { API_URL } from "@/constants/urls";
import { ReissueAccessTokenDocument, ReissueAccessTokenMutation, ReissueAccessTokenMutationResult } from "@/lib/graphql/schema.generated";
import { isTokenExpired } from "@/lib/utils/isTokenExpired";
import { ApolloClient, from, InMemoryCache, NormalizedCacheObject, Observable } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { RetryLink } from "@apollo/client/link/retry";
import { createUploadLink } from "apollo-upload-client";

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

const retryLink = new RetryLink({
  delay: {
    initial: 100,
    max: 500,
    jitter: true,
  },
  attempts: {
    max: 3,
    retryIf: error => Boolean(error),
  },
});

const accessLink = setContext((req, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const reissueToken = () => {
  const client = getClient();
  return client.mutate<
    ReissueAccessTokenMutation,
    ReissueAccessTokenMutationResult
  >({ mutation: ReissueAccessTokenDocument })
    .then(({ data, errors }) => {
      if (!errors && data) {
        const token = data.reissueAccessToken.accessToken;
        localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
      }
    });
};

const refreshLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions.code) {
        case "UNAUTHENTICATED":
          const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

          if (token && isTokenExpired(token)) {
            return new Observable(observer => {
              reissueToken()
                .then(() => {
                  const subscriber = {
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer),
                  };

                  // Retry last failed request
                  forward(operation).subscribe(subscriber);
                })
                .catch(error => {
                  console.log("error", error);

                  // No refresh or client token available, we force user to log-in
                  observer.error(error);
                });
            });
          }
      }
    }
  }
});

const abortController = new AbortController();

const uploadLink = createUploadLink({
  uri: `${API_URL}/graphql`,
  credentials: "include",
  headers: {
    "Apollo-Require-Preflight": "true",
  },
  fetchOptions: {
    signal: abortController.signal,
  },
  fetch,
});

const authLink = refreshLink.concat(accessLink);

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: from([errorLink, retryLink, authLink, uploadLink]),
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
