export function WaveBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] opacity-[.22]"
    >
      <svg
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0 170 C240 90 420 230 720 160 C1000 95 1200 210 1440 130 L1440 260 L0 260Z"
          fill="#0B1F3A"
          opacity=".55"
        />
        <path
          d="M0 200 C300 140 520 250 820 190 C1080 140 1260 230 1440 180 L1440 260 L0 260Z"
          fill="#087F8C"
          opacity=".6"
        />
        <path
          d="M0 230 C260 200 560 260 900 225 C1140 200 1300 245 1440 225 L1440 260 L0 260Z"
          fill="#2563EB"
          opacity=".45"
        />
        <path
          d="M0 150 C320 230 600 110 900 175 C1150 230 1320 140 1440 160"
          fill="none"
          stroke="#F2B544"
          strokeWidth="3"
          opacity=".9"
        />
      </svg>
    </div>
  );
}
