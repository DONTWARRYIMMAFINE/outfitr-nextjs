"use client";

import { useMeQuery, useMyCartQuery, useMyWishlistQuery } from "@/lib/graphql/schema.generated";
import { loggedInUser, userCart, userWishlist } from "@/store/user.store";
import { FC, PropsWithChildren, ReactNode } from "react";

export interface SessionProviderProps extends PropsWithChildren {
  children?: ReactNode;
}

const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const { loading: userLoading } = useMeQuery({
    onCompleted: data => loggedInUser(data.me),
    onError: _ => loggedInUser(null),
  });

  const { loading: cartLoading } = useMyCartQuery({
    onCompleted: data => userCart(data.myCart),
    onError: _ => userCart(null),
  });

  const { loading: wishlistLoading } = useMyWishlistQuery({
    onCompleted: data => userWishlist(data.myWishlist),
    onError: _ => userWishlist(null),
  });

  const loading = userLoading || cartLoading || wishlistLoading;
  return <>{!loading && children}</>;
};

export default SessionProvider;
