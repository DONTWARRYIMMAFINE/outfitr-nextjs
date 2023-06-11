export type RouteKey =
  | "Demo"
  | "Home"
  | "Catalog"
  | "ProductDetails"
  | "About"
  | "Contact"
  | "SignUp"
  | "LogIn"
  | "Partner"
  | "Brands"
  | "Products"
  | "ReceivedOrders"
  | "Profile"
  | "Orders"
  | "Addresses"
  | "Settings"
  | "LogOut"
  | "Wishlist"
  | "Cart"
  | "Checkout"
  | "ShippingAndDelivery"
  | "TermsAndConditions"
  | "PrivacyAndPolicy";

export type RouteValue = {
  title: string;
  i18nKey: string;
  href: string;
  query?: any;
}

export const profileTabs = ["", "orders", "addresses", "settings"];
export const partnerTabs = ["brands", "products", "receivedOrders"];

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
  ProductDetails: {
    title: "Product Details",
    i18nKey: "productDetails",
    href: "/product",
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
    i18nKey: "profile.main",
    href: "/profile",
  },
  Orders: {
    title: "My Orders",
    i18nKey: "profile.orders",
    href: "/profile",
    query: { tab: "orders" },
  },
  Addresses: {
    title: "My Addresses",
    i18nKey: "profile.addresses",
    href: "/profile",
    query: { tab: "addresses" },
  },
  Settings: {
    title: "Settings",
    i18nKey: "profile.settings",
    href: "/profile",
    query: { tab: "settings" },
  },
  LogOut: {
    title: "Log Out",
    i18nKey: "logout",
    href: "/log-out",
  },
  Partner: {
    title: "Partner",
    i18nKey: "component.route.partner",
    href: "/partner",
  },
  Brands: {
    title: "Brands",
    i18nKey: "partner.brands",
    href: "/partner",
    query: { tab: "brands" },
  },
  Products: {
    title: "Products",
    i18nKey: "partner.products",
    href: "/partner",
    query: { tab: "products" },
  },
  ReceivedOrders: {
    title: "Received Orders",
    i18nKey: "partner.receivedOrders",
    href: "/partner",
    query: { tab: "receivedOrders" },
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
    href: "/cart/checkout",
  },
  ShippingAndDelivery: {
    title: "Shipping & Delivery",
    i18nKey: "",
    href: "/",
  },
  TermsAndConditions: {
    title: "Terms & Conditions",
    i18nKey: "",
    href: "/",
  },
  PrivacyAndPolicy: {
    title: "Privacy & Policy",
    i18nKey: "",
    href: "/",
  }
};


export const mainRoutes: RouteValue[] = [
  Routes.Home,
  Routes.Catalog,
  Routes.Contact,
  Routes.About,
];

export const guestMenuRoutes: RouteValue[] = [
  Routes.LogIn,
  Routes.SignUp,
];

export const customerMenuRoutes: RouteValue[] = [
  Routes.Profile,
  Routes.Orders,
  Routes.Addresses,
  Routes.Settings,
  Routes.LogOut,
];

export const partnerMenuRoutes: RouteValue[] = [
  Routes.Brands,
  Routes.Products,
  Routes.ReceivedOrders,
];
