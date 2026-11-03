import { useTranslations } from "next-intl";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { Link } from "@/i18n/navigation";
import { SHOW_PROPOSED } from "@/lib/flags";

const MENU_ITEM =
  "block w-full cursor-pointer rounded-lg px-3.5 py-2.5 text-left md:px-2 lg:px-3 text-[.95rem] font-semibold text-navy no-underline hover:bg-mist md:w-auto";

const DROPDOWN_LINK =
  "block rounded-lg px-3 py-2.5 text-[.95rem] no-underline hover:bg-ice";

export function SiteHeader() {
  const t = useTranslations("nav");

  return (
    <header className="sticky top-0 z-50 border-b border-mist bg-ice/95 backdrop-blur-[10px] backdrop-saturate-[1.3]">
      <div className="wrap flex h-[74px] items-center gap-3">
        <Link
          href={{ pathname: "/", hash: "top" }}
          aria-label={t("home")}
          className="shrink-0"
        >
          <Image
            src="/logo-avitek.svg"
            alt=""
            width={117}
            height={44}
            priority
            unoptimized
          />
        </Link>
        <MobileMenu languageSwitcher={<LanguageSwitcher />}>
          <li>
            <Link href={{ pathname: "/", hash: "top" }} className={MENU_ITEM}>
              {t("homeLink")}
            </Link>
          </li>
          <li>
            <NavDropdown label={t("about")} buttonClassName={MENU_ITEM}>
              <Link href="/tentang" className={DROPDOWN_LINK}>
                <span>{t("aboutProfile")}</span>
                <small className="block text-[.8rem] text-slate-muted">
                  {t("aboutProfileSub")}
                </small>
              </Link>
              <Link href="/tentang/pendiri" className={DROPDOWN_LINK}>
                <span>{t("aboutFounders")}</span>
                <small className="block text-[.8rem] text-slate-muted">
                  {t("aboutFoundersSub")}
                </small>
              </Link>
            </NavDropdown>
          </li>
          {SHOW_PROPOSED && (
            <li>
              <Link href={{ pathname: "/", hash: "program" }} className={MENU_ITEM}>
                {t("program")}
              </Link>
            </li>
          )}
          <li>
            <Link href={{ pathname: "/", hash: "kemitraan" }} className={MENU_ITEM}>
              {t("partnership")}
            </Link>
          </li>
          <li>
            <NavDropdown label={t("insights")} buttonClassName={MENU_ITEM}>
              <Link href={{ pathname: "/", hash: "penerima" }} className={DROPDOWN_LINK}>
                <span>{t("insightsStories")}</span>
                <small className="block text-[.8rem] text-slate-muted">
                  {t("insightsStoriesSub")}
                </small>
              </Link>
              <Link href={{ pathname: "/", hash: "jejak" }} className={DROPDOWN_LINK}>
                <span>{t("insightsTrack")}</span>
                <small className="block text-[.8rem] text-slate-muted">
                  {t("insightsTrackSub")}
                </small>
              </Link>
            </NavDropdown>
          </li>
          <li>
            <Link href={{ pathname: "/", hash: "acara" }} className={MENU_ITEM}>
              {t("events")}
            </Link>
          </li>
          <li>
            <Link
              href={{ pathname: "/", hash: "gabung" }}
              className="mt-2 block rounded-full bg-navy px-5 py-[11px] text-center text-[.95rem] font-bold text-white no-underline hover:bg-navy-2 md:ml-2 md:mt-0"
            >
              {t("join")}
            </Link>
          </li>
        </MobileMenu>
      </div>
    </header>
  );
}
