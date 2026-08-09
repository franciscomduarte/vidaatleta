import { RecordCard } from "@/components/ui/RecordCard";
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
          Recordes em destaque
        </span>
        <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-balance max-w-xl">
          Cada marca pessoal, registrada e celebrada.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <RecordCard
              key={c.registro}
              image={IMAGES[c.imageKey]}
              atleta={c.atleta}
              provaNome={c.prova.nome}
              tempoCentesimos={c.resultado.tempoCentesimos}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
