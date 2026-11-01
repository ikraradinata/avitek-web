import { cn } from "@/lib/utils";

export function Kicker({
  tone = "light",
  children,
}: Readonly<{
  tone?: "light" | "dark";
  children: React.ReactNode;
}>) {
  return (
    <span
      className={cn(
        "mb-3.5 inline-flex items-center gap-2.5 text-[.92rem] font-semibold before:h-0.5 before:w-[22px] before:shrink-0 before:bg-current before:content-['']",
        tone === "light" ? "text-teal-ink" : "text-gold",
      )}
    >
      {children}
    </span>
  );
}
