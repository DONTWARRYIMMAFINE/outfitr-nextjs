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
  href: string;
}

export const Routes: Record<RouteKey, RouteValue> = {
  Demo: {
    title: "Demo",
    href: "/demo",
  },
  Home: {
    title: "Home",
    href: "/",
  },
  Catalog: {
    title: "Outfits",
    href: "/category",
  },
  About: {
    title: "About",
    href: "/about",
  },
  Contact: {
    title: "Contact",
    href: "/contact",
  },
  SignUp: {
    title: "Sign Up",
    href: "/sign-up",
  },
  LogIn: {
    title: "Log In",
    href: "/log-in",
  },
  Profile: {
    title: "Profile",
    href: "/profile",
  },
  Orders: {
    title: "My Orders",
    href: "/profile/orders",
  },
  Addresses: {
    title: "My Addresses",
    href: "/profile/addresses",
  },
  LogOut: {
    title: "Log Out",
    href: "/log-out",
  },
  Wishlist: {
    title: "Wishlist",
    href: "/wishlist",
  },
  Cart: {
    title: "Cart",
    href: "/cart",
  },
  Checkout: {
    title: "Checkout",
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
