import { Badge } from "@/components/ui/Badge";
import { AthleteAvatar } from "@/components/ui/AthleteAvatar";
import { formatTempo } from "@/lib/format";
import { getAtleta, getMelhorTempo } from "@/lib/mock-data";

export function PhoneMock() {
  const atleta = getAtleta("376380")!;
  const pb100 = getMelhorTempo(atleta.registro, "100-livre")!;

  return (
    <div className="w-[280px] rounded-[2rem] border border-white/15 bg-navy-900/90 p-2 shadow-2xl backdrop-blur">
      <div className="rounded-[1.6rem] bg-navy-950 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AthleteAvatar nome={atleta.nome} tone="accent" size="sm" />
            <div>
              <div className="text-sm font-semibold text-white">{atleta.nome}</div>
              <div className="text-[11px] text-white/50">{atleta.categoria}</div>
            </div>
          </div>
          <Badge tone="live" className="!py-0.5 !px-2 !text-[10px]">
            Ao vivo
          </Badge>
        </div>

        <div className="mt-4 rounded-xl bg-white/5 p-3">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-white/40">
            100m Livre · recorde pessoal
          </div>
          <div className="mt-1 font-display font-extrabold text-3xl tabular-nums text-white">
            {formatTempo(pb100.tempoCentesimos)}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/5 p-3">
            <div className="text-[10px] font-semibold uppercase tracking-wide text-white/40">
              Ranking RS
            </div>
            <div className="mt-1 font-display font-bold text-lg text-accent">#2</div>
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <div className="text-[10px] font-semibold uppercase tracking-wide text-white/40">
              Nacional
            </div>
            <div className="mt-1 font-display font-bold text-lg text-white">#14</div>
          </div>
        </div>

        <div className="mt-3 flex items-end gap-1 rounded-xl bg-white/5 p-3">
          {[6690, 6520, 6380, 6210, 6045, 5910].map((t, i, arr) => {
            const min = Math.min(...arr);
            const max = Math.max(...arr);
            const h = 8 + ((max - t) / (max - min || 1)) * 24;
            return (
              <span
                key={i}
                className="flex-1 rounded-sm bg-accent/80 last:bg-accent"
                style={{ height: `${h}px` }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
