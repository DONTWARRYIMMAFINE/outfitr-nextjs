import { UserFragment } from "@/lib/graphql/schema.generated";
import { makeVar } from "@apollo/client";

export const loggedInUser = makeVar<UserFragment | null | undefined>(undefined);
