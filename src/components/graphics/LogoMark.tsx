// Simbol AVITEK KUKM, digambar ulang dari PNG logo (bukan file vektor asli desainer).
// Bentuk A dan titik bawah mengikuti warna teks induk: navy di header, putih di footer.
export function LogoMark({ size }: Readonly<{ size: number }>) {
  return (
    <svg width={size} height={size} viewBox="66 43 684 692" aria-hidden="true">
      <circle
        cx="409.5"
        cy="404.5"
        r="309.5"
        fill="none"
        stroke="#5CC2EC"
        strokeWidth="22"
      />
      <path
        d="M362.0 81.0L109.7 579.1A44 44 0 0 0 187.9 619.6L274.5 456.0H540.5L627.1 619.6A44 44 0 0 0 705.3 579.1L453.0 81.0A51 51 0 0 0 362.0 81.0ZM407.5 186L516.5 388H298.5Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M177 304L408 651L639 304"
        fill="none"
        stroke="#01BCA9"
        strokeWidth="82"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="407.5" cy="111.5" r="43" fill="#FDBA06" />
      <circle cx="407.5" cy="640" r="35" fill="currentColor" />
    </svg>
  );
}
