import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["id", "en"],
  defaultLocale: "id",
  localePrefix: "always", // /id dan /en selalu eksplisit
  localeDetection: true, // cookie NEXT_LOCALE → Accept-Language → default
  alternateLinks: false, // hreflang ditulis di metadata, x-default harus ke /id
  pathnames: {
    "/": "/",
    "/kebijakan-privasi": { id: "/kebijakan-privasi", en: "/privacy-policy" },
  },
});
