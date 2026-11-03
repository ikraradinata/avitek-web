import { Kicker } from "@/components/ui/kicker";

// Kepala halaman dalam, satu-satunya h1 di halaman
export function PageHeader({
  kicker,
  title,
  intro,
}: Readonly<{
  kicker: string;
  title: string;
  intro: string;
}>) {
  return (
    <header className="bg-ice pb-14 pt-[72px]">
      <div className="wrap">
        <div className="max-w-[60ch]">
          <Kicker>{kicker}</Kicker>
          <h1 className="mb-[18px]">{title}</h1>
          <p className="text-[1.15rem] text-slate-muted">{intro}</p>
        </div>
      </div>
    </header>
  );
}
