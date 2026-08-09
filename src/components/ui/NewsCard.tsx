import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ImageFrame } from "@/components/ui/ImageFrame";
import type { ImageRef } from "@/lib/images";

export function NewsCard({
  image,
  tag,
  data,
  titulo,
  resumo,
  href,
}: {
  image: ImageRef;
  tag: string;
  data: string;
  titulo: string;
  resumo: string;
  href?: string;
}) {
  const conteudo = (
    <Card className="h-full overflow-hidden hover:border-brand transition-colors">
      <ImageFrame
        src={image.src}
        alt={image.alt}
        aspect="video"
        fallbackLabel={tag}
        rounded={false}
      />
      <div className="p-5">
        <div className="flex items-center gap-2">
          <Badge tone="brand">{tag}</Badge>
          <span className="text-xs font-medium text-secondary">{data}</span>
        </div>
        <h3 className="mt-3 font-display font-bold text-lg leading-snug text-balance">
          {titulo}
        </h3>
        <p className="mt-2 text-sm text-secondary leading-relaxed">{resumo}</p>
      </div>
    </Card>
  );

  return href ? (
    <Link href={href} className="block h-full rounded-2xl">
      {conteudo}
    </Link>
  ) : (
    conteudo
  );
}
