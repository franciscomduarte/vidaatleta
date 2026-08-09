import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CAMPEONATOS } from "@/lib/mock-data";
import { formatData } from "@/lib/format";
import type { StatusCampeonato } from "@/lib/types";

const STATUS_TONE: Record<StatusCampeonato, "live" | "neutral" | "brand"> = {
  "ao vivo": "live",
  encerrado: "neutral",
  programado: "brand",
};

const STATUS_LABEL: Record<StatusCampeonato, string> = {
  "ao vivo": "Ao vivo",
  encerrado: "Encerrado",
  programado: "Programado",
};

export default function CampeonatosPage() {
  const ordenados = [...CAMPEONATOS].sort((a, b) =>
    b.dataInicio.localeCompare(a.dataInicio)
  );

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <SectionHeader
        eyebrow="Histórico"
        title="Campeonatos"
        description="Campeonatos importados, com acesso à tabela de resultados de cada um."
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {ordenados.map((c) => (
          <Link key={c.id} href={`/campeonatos/${c.id}`}>
            <Card className="p-5 h-full hover:border-brand transition-colors">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display font-bold text-lg leading-snug">
                  {c.nome}
                </h2>
                <Badge tone={STATUS_TONE[c.status]}>{STATUS_LABEL[c.status]}</Badge>
              </div>
              <p className="mt-2 text-sm text-secondary">
                {c.cidade}/{c.uf} · piscina {c.piscina}
              </p>
              <p className="mt-1 text-sm text-secondary">
                {formatData(c.dataInicio)} — {formatData(c.dataFim)}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
