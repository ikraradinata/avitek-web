import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.ts",
  ],
  theme: {
    // Titik henti mengikuti mockup (max-width 560, 860, 1020)
    screens: { sm: "561px", md: "861px", lg: "1021px" },
    // Palet Warna Resmi AVITEK KUKM, menggantikan seluruh palet bawaan Tailwind
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      navy: { DEFAULT: "#0B1F3A", 2: "#16304F", deep: "#07162A" },
      teal: { DEFAULT: "#087F8C", ink: "#06707C", deep: "#05535C", soft: "#DDF0F1" },
      white: "#FFFFFF",
      ice: "#F4F8FB",
      mist: "#DCE8F0",
      slate: { DEFAULT: "#64748B", muted: "#56657A" },
      gold: { DEFAULT: "#F2B544", soft: "#FDF1D8", ink: "#6B4A0E" },
      blue: { DEFAULT: "#2563EB", soft: "#DCE7FD", ink: "#1D4ED8" },
      orange: {
        DEFAULT: "#F97316",
        hover: "#FB8A3C",
        soft: "#FEE9D8",
        ink: "#9A3D0A",
      },
      "on-dark": { DEFAULT: "#DCE8F0", muted: "#B8C7D6" },
    },
    extend: {
      maxWidth: { wrap: "1180px" },
      boxShadow: { dropdown: "0 18px 40px -22px rgba(11,31,58,.45)" },
      borderRadius: { sm: "6px", md: "12px", lg: "20px" },
      fontFamily: { sans: ["var(--font-jakarta)", "system-ui", "sans-serif"] },
      backgroundImage: {
        "grad-navy-teal": "linear-gradient(135deg, #0B1F3A, #087F8C)",
        "grad-teal-blue": "linear-gradient(135deg, #087F8C, #2563EB)",
        "grad-gold-orange": "linear-gradient(160deg, #F2B544, #F97316)",
      },
    },
  },
  plugins: [],
};
export default config;
