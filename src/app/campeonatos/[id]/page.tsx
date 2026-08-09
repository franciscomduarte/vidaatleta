import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getAtleta, getCampeonato, getResultadosDoCampeonato } from "@/lib/mock-data";
import { formatData, formatTempo } from "@/lib/format";

export default async function CampeonatoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campeonato = getCampeonato(id);
  if (!campeonato) notFound();

  const resultados = getResultadosDoCampeonato(id);
  const porProva = new Map<string, typeof resultados>();
  for (const r of resultados) {
    const lista = porProva.get(r.prova.id) ?? [];
    lista.push(r);
    porProva.set(r.prova.id, lista);
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <Link href="/campeonatos" className="text-sm text-secondary hover:text-primary">
        ← Campeonatos
      </Link>

      <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-balance">
            {campeonato.nome}
          </h1>
          <p className="mt-2 text-secondary">
            {campeonato.cidade}/{campeonato.uf} · piscina {campeonato.piscina} ·{" "}
            {formatData(campeonato.dataInicio)} — {formatData(campeonato.dataFim)}
          </p>
        </div>
        {campeonato.status === "ao vivo" && <Badge tone="live">Ao vivo</Badge>}
      </div>

      <div className="mt-8 space-y-6">
        {[...porProva.entries()].map(([provaId, lista]) => (
          <Card key={provaId} className="overflow-hidden">
            <div className="border-b border-subtle px-5 py-3">
              <h2 className="font-display font-bold">{lista[0].prova.nome}</h2>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {lista
                  .sort((a, b) => a.resultado.colocacao - b.resultado.colocacao)
                  .map((r) => (
                    <tr key={r.resultado.id} className="border-t border-subtle first:border-t-0">
                      <td className="px-5 py-3 w-10 font-display font-bold tabular-nums">
                        {r.resultado.colocacao}
                      </td>
                      <td className="px-5 py-3">
                        <Link
                          href={`/atleta/${r.resultado.atletaRegistro}`}
                          className="font-semibold hover:text-brand"
                        >
                          {getAtleta(r.resultado.atletaRegistro)?.nome ?? r.resultado.atletaRegistro}
                        </Link>
                      </td>
                      <td className="px-5 py-3 text-right font-display font-semibold tabular-nums">
                        {formatTempo(r.resultado.tempoCentesimos)}
                      </td>
                      <td className="px-5 py-3 text-right">
                        {r.resultado.recordePessoal && <Badge tone="record">PB</Badge>}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Card>
        ))}
        {resultados.length === 0 && (
          <p className="text-secondary">Nenhum resultado cadastrado para este campeonato.</p>
        )}
      </div>
    </div>
  );
}
