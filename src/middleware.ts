import { fallbackLng, languages } from "@/lib/i18n/settings";
import acceptLanguage from "accept-language";
import { NextRequest, NextResponse } from "next/server";

acceptLanguage.languages(languages);

export const config = {
  // Exclude all systems folders
  matcher: [
    "/((?!api|_next/static|_next/image|assets|favicon.ico|logo.png|sw.js).*)",
  ],
};

const cookieName = "i18next";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.indexOf("icon") > -1 || req.nextUrl.pathname.indexOf("chrome") > -1) {
    return NextResponse.next();
  }

  // Try to get locale from Cookie
  let lng: string | null = acceptLanguage.get(req.cookies.get(cookieName)?.value);

  // Try to get locale from Index
  if (!lng) {
    lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  }

  // If still nothing, set fallback language
  if (!lng) {
    lng = fallbackLng;
  }

  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer")!);
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
