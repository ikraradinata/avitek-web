import type { StepState } from "@/config/structure";
import { cn } from "@/lib/utils";

const STATE_STYLES: Record<StepState, string> = {
  now: "bg-orange-soft text-orange-ink",
  open: "bg-blue-soft text-blue-ink",
  planned: "bg-mist text-navy-2",
};

export function Tag({
  state,
  className,
  children,
}: Readonly<{
  state: StepState;
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1.5 text-[.82rem] font-bold",
        STATE_STYLES[state],
        className,
      )}
    >
      {children}
    </span>
  );
}
