import Link from "next/link";
import { ChampionshipCard } from "@/components/ui/ChampionshipCard";
import { CAMPEONATOS } from "@/lib/mock-data";
import { IMAGES } from "@/lib/images";

const IMAGE_KEY: Record<string, string> = {
  "brasileiro-interclubes-2026": "championships.brasileiro-interclubes-2026",
  "trofeu-brasil-juvenil-2026": "championships.trofeu-brasil-juvenil-2026",
  "circuito-estadual-rs-2etapa": "championships.circuito-estadual-rs-2etapa",
  "copa-sudeste-2026": "championships.copa-sudeste-2026",
};

export function ChampionshipsSection() {
  const ordenados = [...CAMPEONATOS].sort((a, b) => b.dataInicio.localeCompare(a.dataInicio));

  return (
    <section className="bg-navy-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Campeonatos
            </span>
            <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-balance max-w-xl text-white">
              Do primeiro nome na lista até o pódio.
            </h2>
          </div>
          <Link href="/campeonatos" className="text-sm font-semibold text-accent hover:opacity-80">
            Ver calendário completo →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ordenados.map((c) => (
            <ChampionshipCard key={c.id} image={IMAGES[IMAGE_KEY[c.id]]} campeonato={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
