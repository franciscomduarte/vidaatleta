import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  PROVAS,
  getAtleta,
  getMelhorTempo,
  getResultadosDoAtleta,
} from "@/lib/mock-data";
import { calcularPontosFina } from "@/lib/fina";
import { formatData, formatTempo, idade } from "@/lib/format";

export default async function AtletaPage({
  params,
}: {
  params: Promise<{ registro: string }>;
}) {
  const { registro } = await params;
  const atleta = getAtleta(registro);
  if (!atleta) notFound();

  const resultados = getResultadosDoAtleta(registro).reverse();
  const melhorGeral = resultados
    .map((r) => r.resultado)
    .sort((a, b) => a.tempoCentesimos - b.tempoCentesimos)[0];
  const provaDoMelhor = melhorGeral
    ? PROVAS.find((p) => p.id === melhorGeral.provaId)
    : undefined;

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            {atleta.categoria} · {atleta.sexo === "F" ? "Feminino" : "Masculino"}
          </span>
          <h1 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-balance">
            {atleta.nome}
          </h1>
          <p className="mt-2 text-secondary">
            {atleta.clube} · {atleta.uf} · {idade(atleta.nascimento)} anos · registro {atleta.registro}
          </p>
        </div>
        <Link
          href={`/comparar?adversario=${atleta.registro}`}
          className="rounded-full border border-subtle px-5 py-2.5 text-sm font-semibold hover:bg-card"
        >
          Comparar
        </Link>
      </div>

      {melhorGeral && provaDoMelhor && (
        <Card className="mt-8 max-w-sm bg-navy-900 border-navy-900 p-6 text-white">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
            {provaDoMelhor.nome} · recorde pessoal
          </span>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="font-display font-extrabold text-4xl tabular-nums">
              {formatTempo(melhorGeral.tempoCentesimos)}
            </span>
          </div>
          <span className="mt-1 block text-sm text-white/60">
            piscina {melhorGeral.piscina}
          </span>
        </Card>
      )}

      <Card className="mt-8 overflow-hidden">
        <div className="border-b border-subtle px-5 py-4">
          <h2 className="font-display font-bold text-lg">Melhores tempos por prova</h2>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-secondary">
              <th className="px-5 py-3">Prova</th>
              <th className="px-5 py-3 text-right">Tempo</th>
              <th className="px-5 py-3 text-right">Pontos FINA</th>
            </tr>
          </thead>
          <tbody>
            {PROVAS.map((prova) => {
              const melhor = getMelhorTempo(atleta.registro, prova.id);
              if (!melhor) return null;
              const pontos = calcularPontosFina(prova.id, atleta.sexo, melhor.tempoCentesimos);
              return (
                <tr key={prova.id} className="border-t border-subtle">
                  <td className="px-5 py-3 font-medium">{prova.nome}</td>
                  <td className="px-5 py-3 text-right font-display font-semibold tabular-nums">
                    {formatTempo(melhor.tempoCentesimos)}
                    {melhor.recordePessoal && <Badge tone="record" className="ml-2">PB</Badge>}
                  </td>
                  <td className="px-5 py-3 text-right tabular-nums text-secondary">
                    {pontos ?? "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      <Card className="mt-6 overflow-hidden">
        <div className="border-b border-subtle px-5 py-4">
          <h2 className="font-display font-bold text-lg">Últimos resultados</h2>
        </div>
        <table className="w-full text-sm">
          <tbody>
            {resultados.map(({ resultado, prova, campeonato }) => (
              <tr key={resultado.id} className="border-t border-subtle first:border-t-0">
                <td className="px-5 py-3">
                  <Link href={`/campeonatos/${campeonato.id}`} className="font-semibold hover:text-brand">
                    {campeonato.nome}
                  </Link>
                  <div className="text-secondary text-xs">
                    {prova.nome} · {formatData(campeonato.dataInicio)}
                  </div>
                </td>
                <td className="px-5 py-3 text-right tabular-nums text-secondary">
                  {resultado.colocacao}º lugar
                </td>
                <td className="px-5 py-3 text-right font-display font-semibold tabular-nums">
                  {formatTempo(resultado.tempoCentesimos)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
