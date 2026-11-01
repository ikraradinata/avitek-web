import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";

export default function HomePage({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  setRequestLocale(locale);

  return (
    <main id="top">
      <Hero />
    </main>
  );
}
