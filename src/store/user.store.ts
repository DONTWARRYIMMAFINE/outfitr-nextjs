import { MeQueryResult, UserFragment } from "@/lib/graphql/schema.generated";
import { makeVar } from "@apollo/client";

const currentUser = makeVar<UserFragment | null | undefined>(undefined);
