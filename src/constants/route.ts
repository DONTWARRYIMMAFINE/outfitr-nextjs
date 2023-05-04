export type RouteKey =
  | "Demo"
  | "Home"
  | "Category"
  | "About"
  | "Contact"
  | "Signup"
  | "Login"
  | "Profile"
  | "Wishlist"
  | "Cart"
  | "Checkout";

export type RouteValue = {
  title: string;
  href: string;
  protected?: boolean;
}

export const Route: Record<RouteKey, RouteValue> = {
  Demo: {
    title: "Demo",
    href: "/demo",
  },
  Home: {
    title: "Home",
    href: "/",
  },
  Category: {
    title: "Outfits",
    href: "/category/root",
  },
  About: {
    title: "About",
    href: "/about",
  },
  Contact: {
    title: "Contact",
    href: "/contact",
  },
  Signup: {
    title: "Sign Up",
    href: "/signup",
  },
  Login: {
    title: "Log In",
    href: "/login",
  },
  Profile: {
    title: "Profile",
    href: "/profile",
    protected: true,
  },
  Wishlist: {
    title: "Wishlist",
    href: "/wishlist",
    protected: true,
  },
  Cart: {
    title: "Cart",
    href: "/cart",
    protected: true,
  },
  Checkout: {
    title: "Checkout",
    href: "/checkout",
    protected: true,
  },
};

export const protectedRoutes = Object.values(Route)
  .filter(value => value.protected)
  .map(value => value.href);
