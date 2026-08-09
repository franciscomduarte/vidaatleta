import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getAtleta, getResultadosDoCampeonato } from "@/lib/mock-data";
import { formatTempo } from "@/lib/format";
import { IMAGES } from "@/lib/images";

function AoVivoPulse() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-coral" />
    </span>
  );
}

const BULLETS = [
  { titulo: "Prova e série ao vivo", desc: "A bateria acontece e você já sabe — nada de esperar o boletim sair." },
  { titulo: "Raia e horário", desc: "Onde e quando seu atleta entra na água, sem precisar perguntar por aí." },
  { titulo: "Resultado ao centésimo", desc: "No formato oficial MSS.CC, publicado no instante em que a mão toca a parede." },
  { titulo: "Favoritos notificados", desc: "Segue alguém? A gente avisa assim que o tempo dele aparece." },
];

export function LiveSection() {
  const resultados = getResultadosDoCampeonato("brasileiro-interclubes-2026")
    .filter(
      (r) =>
        r.prova.id === "100-livre" &&
        r.resultado.piscina === "50m" &&
        getAtleta(r.resultado.atletaRegistro)?.sexo === "M"
    )
    .sort((a, b) => a.resultado.tempoCentesimos - b.resultado.tempoCentesimos)
    .slice(0, 4);

  const textura = IMAGES["live.pool-texture"];

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {textura.src && (
        <Image
          src={textura.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.08]"
        />
      )}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--navy-950) 0%, rgba(10,27,61,0.85) 40%, var(--navy-950) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-20 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coral">
            <AoVivoPulse />
            Rolando agora
          </span>
          <h2 className="mt-3 font-display font-bold text-2xl sm:text-3xl tracking-tight text-balance">
            Está acontecendo agora, nesta piscina.
          </h2>
          <p className="mt-2 text-white/70 max-w-md">
            Série, raia, horário e resultado — a borda da piscina cabe na
            palma da sua mão, sem atraso e sem arredondamento.
          </p>
          <ul className="mt-6 space-y-4">
            {BULLETS.map((b) => (
              <li key={b.titulo} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <div>
                  <div className="font-semibold text-sm">{b.titulo}</div>
                  <div className="text-sm text-white/60">{b.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Card className="bg-navy-900 border-white/10 overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-2.5">
              <Badge tone="live" className="!animate-none gap-1.5">
                <AoVivoPulse />
                Ao vivo
              </Badge>
              <span className="text-sm text-white/70">15:47 BRT</span>
            </div>
            <span className="text-xs text-white/50">Piscina 50m · São Paulo</span>
          </div>
          <div className="px-5 py-3">
            <h3 className="font-display font-bold text-lg">100m Livre</h3>
            <p className="text-xs text-white/50">
              Campeonato Brasileiro Interclubes 2026 · Final A
            </p>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {resultados.map((r, i) => (
                <tr key={r.resultado.id} className="border-t border-white/10">
                  <td className="px-5 py-2.5 w-8 text-white/40 tabular-nums">{i + 1}</td>
                  <td className="px-5 py-2.5 font-medium">
                    {getAtleta(r.resultado.atletaRegistro)?.nome}
                  </td>
                  <td className="px-5 py-2.5 text-right font-display font-semibold tabular-nums">
                    {formatTempo(r.resultado.tempoCentesimos)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="border-t border-white/10 px-5 py-3 flex items-center justify-between text-xs">
            <span className="text-white/50">Pedro é seu favorito — e o tempo dele já está aqui.</span>
            <Link
              href="/campeonatos/brasileiro-interclubes-2026"
              className="font-semibold text-accent hover:text-accent/80"
            >
              Ver bateria completa →
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}
