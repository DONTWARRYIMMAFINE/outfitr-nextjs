export type RouteKey =
  | "Demo"
  | "Home"
  | "Catalog"
  | "About"
  | "Contact"
  | "SignUp"
  | "LogIn"
  | "Profile"
  | "Orders"
  | "Addresses"
  | "LogOut"
  | "Wishlist"
  | "Cart"
  | "Checkout";

export type RouteValue = {
  title: string;
  i18nKey: string;
  href: string;
}

export const Routes: Record<RouteKey, RouteValue> = {
  Demo: {
    title: "Demo",
    i18nKey: "demo",
    href: "/demo",
  },
  Home: {
    title: "Home",
    i18nKey: "home",
    href: "/",
  },
  Catalog: {
    title: "Outfits",
    i18nKey: "catalog",
    href: "/category",
  },
  About: {
    title: "About",
    i18nKey: "about",
    href: "/about",
  },
  Contact: {
    title: "Contact",
    i18nKey: "contact",
    href: "/contact",
  },
  SignUp: {
    title: "Sign Up",
    i18nKey: "signup",
    href: "/sign-up",
  },
  LogIn: {
    title: "Log In",
    i18nKey: "login",
    href: "/log-in",
  },
  Profile: {
    title: "Profile",
    i18nKey: "profile",
    href: "/profile",
  },
  Orders: {
    title: "My Orders",
    i18nKey: "orders",
    href: "/profile/orders",
  },
  Addresses: {
    title: "My Addresses",
    i18nKey: "addresses",
    href: "/profile/addresses",
  },
  LogOut: {
    title: "Log Out",
    i18nKey: "logout",
    href: "/log-out",
  },
  Wishlist: {
    title: "Wishlist",
    i18nKey: "wishlist",
    href: "/wishlist",
  },
  Cart: {
    title: "Cart",
    i18nKey: "cart",
    href: "/cart",
  },
  Checkout: {
    title: "Checkout",
    i18nKey: "checkout",
    href: "/checkout",
  },
};

export const customerProtectedRoutes = [Routes.Wishlist.href, Routes.Cart.href, Routes.Profile.href];

interface NavigationRoute {
  title: string;
  href: string;
}

export const mainRoutes: RouteValue[] = [
  Routes.Home,
  Routes.Catalog,
  Routes.Contact,
  Routes.About,
]

export const guestMenuRoutes: RouteValue[] = [
  Routes.LogIn,
  Routes.SignUp
];

export const userMenuRoutes: NavigationRoute[] = [
  Routes.Profile,
  Routes.Orders,
  Routes.Addresses,
  Routes.LogOut,
];
