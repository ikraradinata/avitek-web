"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function NavDropdown({
  label,
  buttonClassName,
  children,
}: Readonly<{
  label: string;
  buttonClassName: string;
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClick(event: MouseEvent) {
      if (!buttonRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
        className={buttonClassName}
      >
        {label} <span aria-hidden="true">▾</span>
      </button>
      <div
        className={cn(
          "pl-3 md:absolute md:left-0 md:top-[calc(100%+6px)] md:min-w-[230px] md:rounded-md md:border md:border-mist md:bg-white md:p-2 md:shadow-dropdown",
          open ? "block" : "hidden",
        )}
      >
        {children}
      </div>
    </div>
  );
}
