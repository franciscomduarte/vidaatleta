import { Hero } from "@/components/home/Hero";
import { AudienceSection } from "@/components/home/AudienceSection";
import { NewsSection } from "@/components/home/NewsSection";
import { FeatureBento } from "@/components/home/FeatureBento";
import { RecordsSection } from "@/components/home/RecordsSection";
import { LiveSection } from "@/components/home/LiveSection";
import { EvolutionSection } from "@/components/home/EvolutionSection";
import { ChampionshipsSection } from "@/components/home/ChampionshipsSection";
import { SearchSection } from "@/components/home/SearchSection";
import { ClosingCta } from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <div>
      <Hero />
      <AudienceSection />
      <NewsSection />
      <FeatureBento />
      <RecordsSection />
      <LiveSection />
      <EvolutionSection />
      <ChampionshipsSection />
      <SearchSection />
      <ClosingCta />
    </div>
  );
}
