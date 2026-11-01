export function Badge({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <span className="mb-[26px] inline-flex items-center gap-2.5 rounded-full bg-gold-soft py-2 pl-2.5 pr-3.5 text-[.9rem] font-bold text-gold-ink">
      <i className="size-2.5 shrink-0 rounded-full bg-gold ring-4 ring-gold/30" />
      <span>{children}</span>
    </span>
  );
}
