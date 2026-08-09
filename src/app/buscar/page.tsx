"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { searchAtletas } from "@/lib/mock-data";

export default function BuscarPage() {
  const [query, setQuery] = useState("");
  const resultados = searchAtletas(query);

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <SectionHeader
        eyebrow="Encontre um atleta"
        title="Buscar atleta"
        description="Busque por nome, clube ou número de registro."
      />

      <input
        autoFocus
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ex.: Marina Costa, GN União, 376380…"
        className="mt-8 w-full rounded-xl border border-subtle bg-card px-4 py-3.5 text-lg outline-none focus:border-brand"
      />

      <div className="mt-6 space-y-2">
        {query.trim() && resultados.length === 0 && (
          <p className="text-secondary text-sm">Nenhum atleta encontrado para “{query}”.</p>
        )}
        {resultados.map((a) => (
          <Link key={a.registro} href={`/atleta/${a.registro}`}>
            <Card className="flex items-center justify-between gap-4 p-4 hover:border-brand transition-colors">
              <div>
                <div className="font-semibold">{a.nome}</div>
                <div className="text-sm text-secondary">
                  {a.clube} · {a.uf} · {a.categoria}
                </div>
              </div>
              <span className="text-xs text-secondary tabular-nums">#{a.registro}</span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
