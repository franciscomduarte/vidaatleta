"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ATLETAS, PROVAS, getMelhorTempo } from "@/lib/mock-data";
import { formatDeltaTempo, formatTempo } from "@/lib/format";
import type { Atleta } from "@/lib/types";

export function ComparadorAtletas({
  atletaLogado,
  adversarioInicial,
}: {
  atletaLogado: Atleta;
  adversarioInicial?: string;
}) {
  const outrosAtletas = ATLETAS.filter((a) => a.registro !== atletaLogado.registro);
  const [adversarioRegistro, setAdversarioRegistro] = useState(
    adversarioInicial && outrosAtletas.some((a) => a.registro === adversarioInicial)
      ? adversarioInicial
      : outrosAtletas[0].registro
  );
  const adversario = outrosAtletas.find((a) => a.registro === adversarioRegistro)!;

  const linhas = useMemo(() => {
    return PROVAS.map((prova) => {
      const tempoLogado = getMelhorTempo(atletaLogado.registro, prova.id);
      const tempoAdversario = getMelhorTempo(adversario.registro, prova.id);
      return { prova, tempoLogado, tempoAdversario };
    }).filter((l) => l.tempoLogado || l.tempoAdversario);
  }, [atletaLogado.registro, adversario.registro]);

  return (
    <div>
      <Card className="p-5">
        <div className="grid grid-cols-2 gap-4 items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
              Você
            </span>
            <div className="mt-1 font-display font-bold text-lg">{atletaLogado.nome}</div>
            <div className="text-sm text-secondary">{atletaLogado.clube}</div>
          </div>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-secondary">Comparar com</span>
            <select
              value={adversarioRegistro}
              onChange={(e) => setAdversarioRegistro(e.target.value)}
              className="rounded-lg border border-subtle bg-page px-3 py-2 font-medium"
            >
              {outrosAtletas.map((a) => (
                <option key={a.registro} value={a.registro}>
                  {a.nome} · {a.clube}
                </option>
              ))}
            </select>
          </label>
        </div>
      </Card>

      <Card className="mt-6 overflow-hidden">
        <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-secondary">
              <th className="px-5 py-3">Prova</th>
              <th className="px-5 py-3 text-right">{atletaLogado.nome.split(" ")[0]}</th>
              <th className="px-5 py-3 text-right">{adversario.nome.split(" ")[0]}</th>
              <th className="px-5 py-3 text-right">Diferença</th>
            </tr>
          </thead>
          <tbody>
            {linhas.map(({ prova, tempoLogado, tempoAdversario }) => {
              const delta =
                tempoLogado && tempoAdversario
                  ? tempoLogado.tempoCentesimos - tempoAdversario.tempoCentesimos
                  : undefined;
              return (
                <tr key={prova.id} className="border-t border-subtle">
                  <td className="px-5 py-3 font-medium">{prova.nome}</td>
                  <td className="px-5 py-3 text-right font-display font-semibold tabular-nums">
                    {tempoLogado ? formatTempo(tempoLogado.tempoCentesimos) : "—"}
                  </td>
                  <td className="px-5 py-3 text-right font-display font-semibold tabular-nums">
                    {tempoAdversario ? formatTempo(tempoAdversario.tempoCentesimos) : "—"}
                  </td>
                  <td className="px-5 py-3 text-right tabular-nums">
                    {delta !== undefined ? (
                      <Badge tone={delta < 0 ? "faster" : delta > 0 ? "slower" : "neutral"}>
                        {formatDeltaTempo(delta)}
                      </Badge>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              );
            })}
            {linhas.length === 0 && (
              <tr>
                <td colSpan={4} className="px-5 py-8 text-center text-secondary">
                  Nenhuma prova em comum entre os dois atletas ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
      </Card>
    </div>
  );
}
