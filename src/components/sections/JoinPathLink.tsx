"use client";

import type { JoinPath } from "@/config/structure";
import { JOIN_PATH_EVENT } from "@/config/structure";
import { Link } from "@/i18n/navigation";

// F-10: tautan ke formulir yang sekaligus memilih jalurnya
export function JoinPathLink({
  path,
  className,
  children,
}: Readonly<{
  path: JoinPath;
  className: string;
  children: React.ReactNode;
}>) {
  return (
    <Link
      href={{ pathname: "/", hash: "gabung" }}
      className={className}
      onClick={() =>
        window.dispatchEvent(new CustomEvent(JOIN_PATH_EVENT, { detail: path }))
      }
    >
      {children}
    </Link>
  );
}
