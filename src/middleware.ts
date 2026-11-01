import { hasLocale } from "next-intl";
import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const handleLocale = createMiddleware(routing);

// F-12: bahasa selain ID/EN (misalnya Korea) diarahkan ke /en, sedangkan
// next-intl akan mengirimnya ke bahasa default (/id)
function prefersUnsupportedLanguage(request: NextRequest) {
  const cookie = request.cookies.get("NEXT_LOCALE")?.value;
  if (hasLocale(routing.locales, cookie)) return false;

  const header = request.headers.get("accept-language");
  if (!header) return false;

  const languages = header
    .split(",")
    .map((part) => part.split(";")[0].trim().split("-")[0].toLowerCase());
  return !languages.some(
    (language) => language === "*" || hasLocale(routing.locales, language),
  );
}

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/" && prefersUnsupportedLanguage(request)) {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }
  return handleLocale(request);
}

export const config = {
  // Lewati API, aset Next, dan file statis
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
