export function FooterWave() {
  return (
    <svg
      viewBox="0 0 320 110"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 hidden h-[110px] w-[320px] opacity-40 md:block"
    >
      <path
        d="M0 110 C60 95 90 40 170 42 C230 44 260 8 320 4 L320 110Z"
        fill="#087F8C"
        opacity=".55"
      />
      <path
        d="M40 110 C100 100 130 62 200 64 C250 66 275 36 320 34 L320 110Z"
        fill="#F2B544"
        opacity=".4"
      />
      <path
        d="M90 110 C140 104 170 84 225 86 C265 88 290 66 320 64 L320 110Z"
        fill="#2563EB"
        opacity=".45"
      />
    </svg>
  );
}
