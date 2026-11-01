"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { getPathname, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const t = useTranslations("nav");
  const activeLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(locale: string) {
    // Router next-intl membuang hash, jadi pakai router Next dan simpan cookie
    // sendiri agar /id#acara → /en#acara tanpa melompat ke atas halaman
    document.cookie = `NEXT_LOCALE=${locale}; path=/; SameSite=Lax`;
    const path = getPathname({ href: pathname, locale });
    router.replace(`${path}${window.location.hash}`, { scroll: false });
  }

  return (
    <div
      role="group"
      aria-label={t("langLabel")}
      className="inline-flex rounded-full border-[1.5px] border-mist bg-white p-[3px]"
    >
      {routing.locales.map((locale) => (
        <button
          key={locale}
          type="button"
          lang={locale}
          title={t(`langNames.${locale}`)}
          aria-pressed={locale === activeLocale}
          onClick={() => switchTo(locale)}
          className={cn(
            "cursor-pointer rounded-full px-[11px] py-2.5 text-[.82rem] md:py-1.5 font-bold tracking-[.02em]",
            locale === activeLocale
              ? "bg-navy text-white"
              : "text-slate-muted",
          )}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
