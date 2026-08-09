"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { getRanking } from "@/lib/mock-data";
import { formatTempo } from "@/lib/format";

const TILES = [
  { titulo: "Ranking por UF", desc: "UF ordenado automaticamente." },
  { titulo: "Ranking nacional", desc: "Todas as provas do país, num lugar." },
  { titulo: "Clubes e equipes", desc: "Compare por agremiação." },
  { titulo: "Tempos oficiais", desc: "Em formato MSS.CC, sempre." },
];

const UFS = ["Nacional", "RS", "SP", "MG", "RJ", "SC", "BA", "PR"];

export function SearchSection() {
  const [uf, setUf] = useState("Nacional");
  const ranking = getRanking("100-livre", "50m")
    .filter((l) => uf === "Nacional" || l.atleta.uf === uf)
    .slice(0, 5);

  return (
    <section className="bg-card border-t border-subtle">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Abrangência nacional
          </span>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-balance">
            A natação do Brasil inteiro, em um só lugar.
          </h2>
          <p className="mt-2 text-secondary">
            Encontre qualquer tempo, de qualquer prova, em qualquer estado —
            do ranking da sua UF ao ranking nacional, por prova, categoria e
            clube.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-4">
          {TILES.map((t) => (
            <Card key={t.titulo} className="p-4">
              <h3 className="font-display font-semibold text-sm">{t.titulo}</h3>
              <p className="mt-1 text-xs text-secondary">{t.desc}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-6 overflow-hidden">
          <div className="px-5 py-4 border-b border-subtle">
            <Link
              href="/buscar"
              className="block rounded-lg border border-subtle bg-page px-4 py-2.5 text-sm text-secondary"
            >
              Buscar atleta, clube ou prova…
            </Link>
            <div className="mt-3 flex flex-wrap gap-2">
              {UFS.map((u) => (
                <button
                  key={u}
                  onClick={() => setUf(u)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold border ${
                    uf === u
                      ? "bg-brand text-white border-brand"
                      : "border-subtle text-secondary hover:text-primary"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs font-semibold uppercase tracking-wide text-secondary">
                <th className="px-5 py-3">100m Livre</th>
                <th className="px-5 py-3 text-right">Temporada 2026</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((l) => (
                <tr key={l.atleta.registro} className="border-t border-subtle">
                  <td className="px-5 py-2.5">
                    <span className="font-display font-bold tabular-nums mr-3 text-secondary">
                      {l.posicao}
                    </span>
                    <Link href={`/atleta/${l.atleta.registro}`} className="font-semibold hover:text-brand">
                      {l.atleta.nome}
                    </Link>
                    <span className="text-secondary text-xs"> · {l.atleta.uf}</span>
                  </td>
                  <td className="px-5 py-2.5 text-right font-display font-semibold tabular-nums">
                    {formatTempo(l.tempoCentesimos)}
                  </td>
                </tr>
              ))}
              {ranking.length === 0 && (
                <tr>
                  <td colSpan={2} className="px-5 py-6 text-center text-secondary">
                    Sem resultados cadastrados para {uf}.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
}
