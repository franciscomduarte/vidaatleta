import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CAMPEONATOS } from "@/lib/mock-data";
import { formatData } from "@/lib/format";

export default function CompeticoesPage() {
  const aoVivo = CAMPEONATOS.filter((c) => c.status === "ao vivo");
  const programadas = CAMPEONATOS.filter((c) => c.status === "programado");

  return (
    <div className="mx-auto max-w-5xl px-6 py-14">
      <SectionHeader
        eyebrow="Tempo real"
        title="Competições"
        description="Séries, raias e resultados assim que saem da piscina — a proposta 'ao vivo' do NADAR, sobre os dados de campeonato/resultado do L3Swim."
      />

      <div className="mt-8 space-y-3">
        {aoVivo.map((c) => (
          <Link key={c.id} href={`/campeonatos/${c.id}`}>
            <Card className="p-5 border-coral/40 hover:border-coral transition-colors">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge tone="live">Ao vivo</Badge>
                    <span className="text-sm text-secondary">
                      {c.cidade}/{c.uf}
                    </span>
                  </div>
                  <h2 className="mt-2 font-display font-bold text-xl">{c.nome}</h2>
                </div>
                <span className="text-sm font-semibold text-brand whitespace-nowrap">
                  Ver resultados →
                </span>
              </div>
            </Card>
          </Link>
        ))}
        {aoVivo.length === 0 && (
          <Card className="p-6 text-secondary">
            Nenhuma competição ao vivo no momento.
          </Card>
        )}
      </div>

      {programadas.length > 0 && (
        <div className="mt-12">
          <h2 className="font-display font-bold text-lg">Próximas</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {programadas.map((c) => (
              <Card key={c.id} className="p-5">
                <h3 className="font-display font-semibold">{c.nome}</h3>
                <p className="mt-1 text-sm text-secondary">
                  {c.cidade}/{c.uf} · {formatData(c.dataInicio)} — {formatData(c.dataFim)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
