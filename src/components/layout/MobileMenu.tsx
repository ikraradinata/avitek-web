"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Menyatukan daftar menu dan tombol hamburger yang berbagi status buka-tutup.
// Pemilih bahasa berada di luar daftar menu agar selalu terlihat di mobile.
export function MobileMenu({
  languageSwitcher,
  children,
}: Readonly<{
  languageSwitcher: React.ReactNode;
  children: React.ReactNode;
}>) {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul
        id="menu"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setOpen(false);
        }}
        className={cn(
          "absolute left-0 right-0 top-[74px] flex-col gap-0.5 border-b border-mist bg-ice px-4 pb-5 pt-3",
          "md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-0.5 md:border-0 md:bg-transparent md:p-0",
          open ? "flex" : "hidden",
        )}
      >
        {children}
      </ul>
      <div className="ml-auto flex items-center gap-2.5 md:ml-1">
        {languageSwitcher}
        <button
          type="button"
          aria-label={t(open ? "menuClose" : "menuOpen")}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
          className="ml-1 cursor-pointer p-2 md:hidden"
        >
          {[0, 1, 2].map((line) => (
            <span key={line} className="my-[5px] block h-0.5 w-6 bg-navy" />
          ))}
        </button>
      </div>
    </>
  );
}
