"use client";

import { useMeQuery, useMyCartLazyQuery, useMyWishlistLazyQuery } from "@/lib/graphql/schema.generated";
import { loggedInUser, userCart, userWishlist } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC, PropsWithChildren, ReactNode, useEffect } from "react";

export interface SessionProviderProps extends PropsWithChildren {
  children?: ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const user = useReactiveVar(loggedInUser);
  const [myCartLazyQuery, { loading: cartLoading }] = useMyCartLazyQuery();
  const [myWishlistLazyQuery, { loading: wishlistLoading }] = useMyWishlistLazyQuery();
  const { loading: userLoading } = useMeQuery({
    onCompleted: data => loggedInUser(data.me),
    onError: _ => loggedInUser(null),
  });

  useEffect(() => {
    if (user) {
      myCartLazyQuery({
        onCompleted: ({ myCart: cart }) => userCart(cart),
        onError: _ => userCart(null),
      });
      myWishlistLazyQuery({
        onCompleted: ({ myWishlist: wishlist }) => userWishlist(wishlist),
        onError: _ => userWishlist(null),
      });
    } else {
      userCart(null);
      userWishlist(null);
    }
  }, [user, myCartLazyQuery, myWishlistLazyQuery]);

  const loading = userLoading || cartLoading || wishlistLoading;
  return <>{!loading && children}</>;
};

export default SessionProvider;
