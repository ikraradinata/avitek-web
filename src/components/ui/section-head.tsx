import { Kicker } from "@/components/ui/kicker";
import { cn } from "@/lib/utils";

export function SectionHead({
  titleId,
  kicker,
  title,
  intro,
  tone = "light",
}: Readonly<{
  titleId: string;
  kicker: string;
  title: string;
  intro: string;
  tone?: "light" | "dark";
}>) {
  return (
    <div className="mb-14 grid grid-cols-1 items-end gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
      <div>
        <Kicker tone={tone}>{kicker}</Kicker>
        <h2 id={titleId} className={cn(tone === "dark" && "text-white")}>
          {title}
        </h2>
      </div>
      <p
        className={cn(
          "max-w-[56ch]",
          tone === "light" ? "text-slate-muted" : "text-on-dark-muted",
        )}
      >
        {intro}
      </p>
    </div>
  );
}
