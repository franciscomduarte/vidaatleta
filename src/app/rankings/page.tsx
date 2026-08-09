"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { AthleteAvatar } from "@/components/ui/AthleteAvatar";
import { PROVAS, getRanking } from "@/lib/mock-data";
import { formatTempo } from "@/lib/format";
import type { Piscina } from "@/lib/types";

export default function RankingsPage() {
  const [provaId, setProvaId] = useState(PROVAS[1].id); // 100m Livre
  const [piscina, setPiscina] = useState<Piscina>("50m");

  const ranking = useMemo(() => getRanking(provaId, piscina), [provaId, piscina]);
  const prova = PROVAS.find((p) => p.id === provaId)!;

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <SectionHeader
        eyebrow="Ranking oficial"
        title="Rankings"
        description="Melhor tempo de cada atleta por prova, filtrável por piscina."
      />

      <Card className="mt-8 p-5">
        <div className="flex flex-wrap gap-4">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-secondary">Prova</span>
            <select
              value={provaId}
              onChange={(e) => setProvaId(e.target.value)}
              className="rounded-lg border border-subtle bg-page px-3 py-2 font-medium"
            >
              {PROVAS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.nome}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-secondary">Piscina</span>
            <select
              value={piscina}
              onChange={(e) => setPiscina(e.target.value as Piscina)}
              className="rounded-lg border border-subtle bg-page px-3 py-2 font-medium"
            >
              <option value="50m">50m</option>
              <option value="25m">25m</option>
            </select>
          </label>
        </div>
      </Card>

      <Card className="mt-6 overflow-hidden">
        <div className="border-b border-subtle px-5 py-4">
          <h2 className="font-display font-bold text-lg">
            {prova.nome} · piscina {piscina}
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-secondary">
                <th className="px-5 py-3 w-12">#</th>
                <th className="px-5 py-3">Atleta</th>
                <th className="px-5 py-3">UF</th>
                <th className="px-5 py-3">Categoria</th>
                <th className="px-5 py-3 text-right">Tempo</th>
              </tr>
            </thead>
            <tbody>
              {ranking.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-secondary">
                    Nenhum resultado cadastrado para este filtro.
                  </td>
                </tr>
              )}
              {ranking.map((linha) => (
                <tr key={linha.atleta.registro} className="border-t border-subtle">
                  <td className="px-5 py-3 font-display font-bold tabular-nums">
                    {linha.posicao}
                  </td>
                  <td className="px-5 py-3">
                    <Link
                      href={`/atleta/${linha.atleta.registro}`}
                      className="flex items-center gap-3 font-semibold hover:text-brand"
                    >
                      <AthleteAvatar nome={linha.atleta.nome} size="sm" />
                      <span>
                        {linha.atleta.nome}
                        <span className="block text-secondary text-xs font-normal">
                          {linha.atleta.clube}
                        </span>
                      </span>
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-secondary">{linha.atleta.uf}</td>
                  <td className="px-5 py-3 text-secondary">{linha.atleta.categoria}</td>
                  <td className="px-5 py-3 text-right font-display font-semibold tabular-nums">
                    {formatTempo(linha.tempoCentesimos)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <p className="mt-4 text-xs text-secondary">
        Dados de exemplo para prototipagem — não são resultados oficiais.
      </p>
    </div>
  );
}
