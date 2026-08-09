import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { formatData } from "@/lib/format";
import type { ImageRef } from "@/lib/images";
import type { Campeonato, StatusCampeonato } from "@/lib/types";

const STATUS_TONE: Record<StatusCampeonato, "live" | "neutral" | "brand"> = {
  "ao vivo": "live",
  encerrado: "neutral",
  programado: "brand",
};

const STATUS_LABEL: Record<StatusCampeonato, string> = {
  "ao vivo": "Ao vivo",
  encerrado: "Encerrado",
  programado: "Em breve",
};

export function ChampionshipCard({
  image,
  campeonato,
}: {
  image: ImageRef;
  campeonato: Campeonato;
}) {
  return (
    <Link
      href={`/campeonatos/${campeonato.id}`}
      className="block h-full rounded-2xl"
    >
      <Card className="h-full overflow-hidden hover:border-brand transition-colors">
        <div className="relative">
          <ImageFrame
            src={image.src}
            alt={image.alt}
            aspect="wide"
            fallbackLabel={campeonato.cidade}
            rounded={false}
          />
          <Badge tone={STATUS_TONE[campeonato.status]} className="absolute top-3 right-3">
            {STATUS_LABEL[campeonato.status]}
          </Badge>
        </div>
        <div className="p-5">
          <h3 className="font-display font-bold leading-snug">{campeonato.nome}</h3>
          <p className="mt-1 text-sm text-secondary">
            {campeonato.cidade}/{campeonato.uf} · piscina {campeonato.piscina}
          </p>
          <p className="mt-1 text-sm text-secondary">
            {formatData(campeonato.dataInicio)} — {formatData(campeonato.dataFim)}
          </p>
        </div>
      </Card>
    </Link>
  );
}
