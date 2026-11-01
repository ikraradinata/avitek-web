import { useTranslations } from "next-intl";

type Figure = { value: string; label: string; note: string };

export function FigureStrip() {
  const t = useTranslations();
  const figures = t.raw("figures") as Figure[];

  return (
    <div className="relative z-[1] mt-[72px] border-y border-mist bg-white">
      <div className="wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {figures.map(({ value, label, note }) => (
          <div
            key={label}
            className="border-b border-mist px-6 py-[30px] last:border-b-0 sm:border-r sm:even:border-r-0 sm:[&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:even:border-r lg:last:border-r-0"
          >
            <b className="block text-[2.2rem] font-extrabold leading-[1.1] tracking-[-.02em] text-navy">
              {value}
            </b>
            <span className="text-[.93rem] text-slate-muted">{label}</span>
            {note && (
              <small className="mt-1 block text-[.78rem] text-slate">
                {note}
              </small>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
