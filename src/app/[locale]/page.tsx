import { setRequestLocale } from "next-intl/server";
import { AgendaSection } from "@/components/sections/AgendaSection";
import { Beneficiaries } from "@/components/sections/Beneficiaries";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { FirstSteps } from "@/components/sections/FirstSteps";
import { Hero } from "@/components/sections/Hero";
import { JoinSection } from "@/components/sections/JoinSection";
import { PartnerGroups } from "@/components/sections/PartnerGroups";
import { ProgramSection } from "@/components/sections/ProgramSection";
import { ProjectTimeline } from "@/components/sections/ProjectTimeline";
import { WhySection } from "@/components/sections/WhySection";
import { SHOW_PROPOSED } from "@/lib/flags";

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
      {SHOW_PROPOSED && <ProgramSection />}
      {SHOW_PROPOSED && <FirstSteps />}
      <Beneficiaries />
      <PartnerGroups />
      <AgendaSection />
      <JoinSection />
    </main>
  );
}
