import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ATLETAS, getMelhorTempo, getRanking } from "@/lib/mock-data";
import { formatTempo } from "@/lib/format";

export function FeatureBento() {
  const ranking = getRanking("100-livre", "50m").slice(0, 4);
  const favoritos = ATLETAS.slice(0, 4);
  const recordeGabriel = getMelhorTempo("385633", "100-borboleta")!;

  return (
    <section className="bg-card border-y border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
          Recursos
        </span>
        <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-balance max-w-xl">
          Tudo o que a natação competitiva precisa.
        </h2>
        <p className="mt-2 max-w-xl text-secondary">
          Tempos oficiais, recordes pessoais, rankings, histórico, próximas
          competições e favoritos — reunidos num só lugar, com a precisão do
          centésimo.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Card className="bg-navy-900 border-navy-900 text-white p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-lg">Tempos oficiais</h3>
              <Badge tone="brand" className="!bg-white/10 !border-white/10 !text-white/70">
                Todos oficiais
              </Badge>
            </div>
            <p className="mt-1 text-sm text-white/60">
              100m Livre · Final A
            </p>
            <table className="mt-4 w-full text-sm">
              <tbody>
                {ranking.map((l) => (
                  <tr key={l.atleta.registro} className="border-t border-white/10 first:border-t-0">
                    <td className="py-2.5 w-6 font-display font-bold text-accent">
                      {l.posicao}
                    </td>
                    <td className="py-2.5">
                      <div className="font-medium">{l.atleta.nome}</div>
                      <div className="text-xs text-white/50">
                        {l.atleta.clube} · {l.atleta.uf}
                      </div>
                    </td>
                    <td className="py-2.5 text-right font-display font-semibold tabular-nums">
                      {formatTempo(l.tempoCentesimos)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Card className="p-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
              Recordes pessoais
            </span>
            <p className="mt-1 text-sm text-secondary">
              Cada melhor marca registrada e comparada ao centésimo.
            </p>
            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Gabriel Rocha · 100m Borboleta
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-display font-extrabold text-4xl tabular-nums">
                  {formatTempo(recordeGabriel.tempoCentesimos)}
                </span>
                <Badge tone="record">PB</Badge>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Card className="p-5">
            <h3 className="font-display font-semibold">Rankings</h3>
            <p className="mt-1 text-sm text-secondary">
              Clube, UF e nacional — atualizado a cada prova.
            </p>
          </Card>
          <Card className="p-5">
            <h3 className="font-display font-semibold">Histórico de competição</h3>
            <p className="mt-1 text-sm text-secondary">
              Toda a sua trajetória de provas, numa linha do tempo.
            </p>
          </Card>
          <Card className="p-5">
            <h3 className="font-display font-semibold">Próximas competições</h3>
            <p className="mt-1 text-sm text-secondary">
              Calendário, inscrições e contagem regressiva.
            </p>
          </Card>
        </div>

        <Card className="mt-4 p-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-semibold">Favoritos</h3>
            <p className="mt-1 text-sm text-secondary">
              Acompanhe atletas, clubes e provas. Receba o resultado assim que sai.
            </p>
          </div>
          <div className="flex -space-x-2">
            {favoritos.map((a) => (
              <span
                key={a.registro}
                title={a.nome}
                className="grid h-9 w-9 place-items-center rounded-full border-2 border-card bg-brand text-xs font-bold text-white"
              >
                {a.nome
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
