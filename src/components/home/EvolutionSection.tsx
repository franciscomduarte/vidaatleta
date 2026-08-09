import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getAtleta } from "@/lib/mock-data";
import { EVOLUCAO_DESTAQUE } from "@/lib/mock-evolucao";
import { formatDeltaTempo, formatTempo } from "@/lib/format";

const BULLETS = [
  { titulo: "Evolução por prova", desc: "Como cada prova sua se comportou, temporada após temporada." },
  { titulo: "Recordes pessoais", desc: "Toda vez que você se supera, fica registrado." },
  { titulo: "Comparação direta", desc: "Você contra quem quiser — rival, parceiro de treino ou o próprio ranking." },
  { titulo: "Tudo ao centésimo", desc: "Sem arredondar. Evolução de verdade se mede no centésimo." },
];

function Sparkline({ pontos }: { pontos: number[] }) {
  const w = 240;
  const h = 72;
  const pad = 6;
  const max = Math.max(...pontos);
  const min = Math.min(...pontos);
  const range = max - min || 1;
  const coords = pontos.map((p, i) => {
    const x = pad + (i / (pontos.length - 1)) * (w - pad * 2);
    const y = pad + ((p - min) / range) * (h - pad * 2);
    return [x, y] as const;
  });
  const line = coords.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `${pad},${h - pad} ${line} ${w - pad},${h - pad}`;
  const [lastX, lastY] = coords[coords.length - 1];

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-18" role="img" aria-label="Evolução do tempo ao longo da temporada">
      <polygon points={area} fill="var(--color-accent)" opacity="0.12" />
      <polyline points={line} fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lastX} cy={lastY} r="4" fill="var(--color-accent)" />
    </svg>
  );
}

export function EvolutionSection() {
  const atleta = getAtleta(EVOLUCAO_DESTAQUE.atletaRegistro)!;
  const tempoAtual = EVOLUCAO_DESTAQUE.pontos[EVOLUCAO_DESTAQUE.pontos.length - 1];
  const deltaTemporada = tempoAtual - EVOLUCAO_DESTAQUE.pontos[0];

  const adversario = getAtleta("379910")!; // Ana Beatriz Souza
  const tempoAdversario = 5698;
  const deltaComparacao = tempoAtual - tempoAdversario;

  return (
    <section className="bg-page">
      <div className="mx-auto max-w-6xl px-6 py-20 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Sua trajetória
          </span>
          <h2 className="mt-3 font-display font-bold text-2xl sm:text-3xl tracking-tight text-balance">
            De onde você veio até onde vai chegar.
          </h2>
          <p className="mt-2 text-secondary max-w-md">
            Cada resultado é um ponto na sua curva. Veja o tempo cair, celebre
            cada recorde batido e meça-se com quem importa, temporada após
            temporada.
          </p>
          <ul className="mt-6 space-y-4">
            {BULLETS.map((b) => (
              <li key={b.titulo} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <div>
                  <div className="font-semibold text-sm">{b.titulo}</div>
                  <div className="text-sm text-secondary">{b.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <Card className="bg-navy-900 border-navy-900 text-white p-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Evolução · {EVOLUCAO_DESTAQUE.provaNome}
            </span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-display font-extrabold text-3xl tabular-nums">
                {formatTempo(tempoAtual)}
              </span>
              <Badge tone="faster">{formatDeltaTempo(deltaTemporada)}</Badge>
            </div>
            <p className="text-xs text-white/50 mt-0.5">{EVOLUCAO_DESTAQUE.temporada}</p>
            <div className="mt-3">
              <Sparkline pontos={EVOLUCAO_DESTAQUE.pontos} />
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Comparação direta · 100m Livre
              </span>
              <Badge tone={deltaComparacao < 0 ? "faster" : "slower"}>
                {formatDeltaTempo(deltaComparacao)}
              </Badge>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-secondary">{atleta.nome.split(" ")[0]}</div>
                <div className="font-display font-bold text-2xl tabular-nums">
                  {formatTempo(tempoAtual)}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-secondary">{adversario.nome.split(" ")[0]}</div>
                <div className="font-display font-bold text-2xl tabular-nums">
                  {formatTempo(tempoAdversario)}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
