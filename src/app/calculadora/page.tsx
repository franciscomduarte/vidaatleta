"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { PROVAS } from "@/lib/mock-data";
import { calcularPontosFina } from "@/lib/fina";
import type { Sexo } from "@/lib/types";

export default function CalculadoraPage() {
  const [provaId, setProvaId] = useState(PROVAS[1].id);
  const [sexo, setSexo] = useState<Sexo>("M");
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(58);
  const [centesimos, setCentesimos] = useState(0);

  const tempoTotal = minutos * 6000 + segundos * 100 + centesimos;
  const pontos = useMemo(
    () => calcularPontosFina(provaId, sexo, tempoTotal),
    [provaId, sexo, tempoTotal]
  );

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <SectionHeader
        eyebrow="World Aquatics"
        title="Calculadora de pontos FINA"
        description="P = 1000 × (base / tempo)³, a fórmula oficial de pontuação FINA/World Aquatics."
      />

      <Card className="mt-8 p-6 space-y-5">
        <div className="grid grid-cols-2 gap-4">
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
            <span className="font-medium text-secondary">Sexo</span>
            <select
              value={sexo}
              onChange={(e) => setSexo(e.target.value as Sexo)}
              className="rounded-lg border border-subtle bg-page px-3 py-2 font-medium"
            >
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </label>
        </div>

        <div>
          <span className="text-sm font-medium text-secondary">Tempo</span>
          <div className="mt-1.5 flex items-center gap-2">
            <NumberField label="min" value={minutos} onChange={setMinutos} max={59} />
            <span className="font-display font-bold text-xl text-secondary">:</span>
            <NumberField label="seg" value={segundos} onChange={setSegundos} max={59} />
            <span className="font-display font-bold text-xl text-secondary">.</span>
            <NumberField label="cent" value={centesimos} onChange={setCentesimos} max={99} />
          </div>
        </div>
      </Card>

      <Card className="mt-6 p-6 text-center bg-navy-900 border-navy-900 text-white">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
          Pontos FINA
        </span>
        <div className="mt-2 font-display font-extrabold text-5xl tabular-nums">
          {pontos ?? "—"}
        </div>
      </Card>

      <p className="mt-4 text-xs text-secondary">
        Tempos de referência aproximados, para prototipagem — não são a tabela oficial vigente.
      </p>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  max,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  max: number;
}) {
  return (
    <label className="flex flex-col items-center gap-1">
      <input
        type="number"
        min={0}
        max={max}
        value={value}
        onChange={(e) => onChange(Math.max(0, Math.min(max, Number(e.target.value) || 0)))}
        className="w-20 rounded-lg border border-subtle bg-page px-3 py-2 text-center font-display font-semibold tabular-nums"
      />
      <span className="text-xs text-secondary">{label}</span>
    </label>
  );
}
