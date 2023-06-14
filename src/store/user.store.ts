import { BrandFragment, CartFragment, UserFragment, WishlistFragment } from "@/lib/graphql/schema.generated";
import { makeVar } from "@apollo/client";

export const loggedInUser = makeVar<UserFragment | null | undefined>(undefined);

export const userCart = makeVar<CartFragment | null | undefined>(undefined);

export const userWishlist = makeVar<WishlistFragment | null | undefined>(undefined);
