// Logo sementara hasil gambar ulang dari mockup, diganti SVG resmi di T-24.
// Bentuk A mengikuti warna teks induk: navy di latar terang, putih di footer.
export function LogoMark({ size }: Readonly<{ size: number }>) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M14 54 L32 14 L50 54"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 30 L32 52 L44 30"
        fill="none"
        stroke="#087F8C"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="9" r="5" fill="#F2B544" />
    </svg>
  );
}
