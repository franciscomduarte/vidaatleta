import { Hero } from "@/components/home/Hero";
import { AudienceSection } from "@/components/home/AudienceSection";
import { FeatureBento } from "@/components/home/FeatureBento";
import { LiveSection } from "@/components/home/LiveSection";
import { EvolutionSection } from "@/components/home/EvolutionSection";
import { SearchSection } from "@/components/home/SearchSection";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <div>
      <Hero />
      <AudienceSection />
      <FeatureBento />
      <LiveSection />
      <EvolutionSection />
      <SearchSection />
      <ClosingCta />
    </div>
  );
}
