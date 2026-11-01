import { setRequestLocale } from "next-intl/server";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { Hero } from "@/components/sections/Hero";
import { ProjectTimeline } from "@/components/sections/ProjectTimeline";
import { WhySection } from "@/components/sections/WhySection";

export default function HomePage({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  setRequestLocale(locale);

  return (
    <main id="top">
      <Hero />
      <ProjectTimeline />
      <WhySection />
      <EcosystemSection />
    </main>
  );
}
