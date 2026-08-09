import { RecordCard } from "@/components/ui/RecordCard";
import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import { IMAGES } from "@/lib/images";
import { getAtleta, getMelhorTempo, getProva } from "@/lib/mock-data";

const DESTAQUES = [
  { imageKey: "records.marina-costa", registro: "376380", provaId: "50-livre" },
  { imageKey: "records.pedro-henrique", registro: "384501", provaId: "100-livre" },
  { imageKey: "records.gabriel-rocha", registro: "385633", provaId: "100-borboleta" },
  { imageKey: "records.thiago-almeida", registro: "383372", provaId: "200-livre" },
];

export function RecordsSection() {
  const cards = DESTAQUES.map((d) => ({
    ...d,
    atleta: getAtleta(d.registro)!,
    prova: getProva(d.provaId)!,
    resultado: getMelhorTempo(d.registro, d.provaId)!,
  }));

  return (
    <section className="bg-card border-y border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
          Melhores marcas
        </span>
        <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-balance max-w-xl">
          Quando o esforço vira número.
        </h2>
        <div className="mt-10">
          <Carousel>
            {cards.map((c) => (
              <CarouselItem key={c.registro} width="w-[220px] sm:w-[240px]">
                <RecordCard
                  image={IMAGES[c.imageKey]}
                  atleta={c.atleta}
                  provaNome={c.prova.nome}
                  tempoCentesimos={c.resultado.tempoCentesimos}
                />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
