// Nama mitra berupa teks sampai logo resmi diizinkan pemilik merek
export function PartnerChip({
  name,
  role,
}: Readonly<{
  name: string;
  role: string;
}>) {
  return (
    <span className="min-w-0 rounded-[10px] border-[1.5px] border-mist bg-ice px-[18px] py-3 text-[.92rem] font-bold text-navy-2">
      {name}
      <small className="block text-[.78rem] font-medium text-slate-muted">
        {role}
      </small>
    </span>
  );
}
