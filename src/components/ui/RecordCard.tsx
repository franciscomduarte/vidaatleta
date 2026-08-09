import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { formatTempo } from "@/lib/format";
import type { ImageRef } from "@/lib/images";
import type { Atleta } from "@/lib/types";

export function RecordCard({
  image,
  atleta,
  provaNome,
  tempoCentesimos,
}: {
  image: ImageRef;
  atleta: Atleta;
  provaNome: string;
  tempoCentesimos: number;
}) {
  const iniciais = atleta.nome
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <Link href={`/atleta/${atleta.registro}`} className="block h-full rounded-2xl">
      <Card className="h-full overflow-hidden hover:border-brand transition-colors">
        <ImageFrame
          src={image.src}
          alt={image.alt}
          aspect="portrait"
          fallbackLabel={iniciais}
          rounded={false}
        />
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-display font-bold">{atleta.nome}</h3>
              <p className="text-xs text-secondary">
                {atleta.clube} · {atleta.uf}
              </p>
            </div>
            <Badge tone="record">PB</Badge>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-secondary">
            {provaNome}
          </p>
          <p className="mt-0.5 font-display font-extrabold text-3xl tabular-nums">
            {formatTempo(tempoCentesimos)}
          </p>
        </div>
      </Card>
    </Link>
  );
}
