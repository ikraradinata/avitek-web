export function DiagonalPattern() {
  return (
    <svg
      viewBox="0 0 400 300"
      aria-hidden="true"
      className="pointer-events-none absolute -right-[60px] -top-10 hidden w-[420px] opacity-35 md:block"
    >
      <path d="M90 0 L190 0 L70 300 L-30 300Z" fill="#DCE8F0" />
      <path d="M210 0 L290 0 L170 300 L90 300Z" fill="#087F8C" opacity=".35" />
      <path d="M310 0 L400 0 L280 300 L190 300Z" fill="#0B1F3A" opacity=".22" />
      <circle
        cx="352"
        cy="64"
        r="26"
        fill="none"
        stroke="#F2B544"
        strokeWidth="4"
      />
    </svg>
  );
}

export function ProgramDiagonal() {
  return (
    <svg
      viewBox="0 0 400 300"
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-[60px] -left-20 w-[380px] opacity-[.12]"
    >
      <path d="M120 0 L260 0 L140 300 L0 300Z" fill="#087F8C" />
    </svg>
  );
}
