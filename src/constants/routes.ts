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
