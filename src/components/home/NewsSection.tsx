import { NewsCard } from "@/components/ui/NewsCard";
import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import { IMAGES } from "@/lib/images";

const NOTICIAS = [
  {
    imageKey: "news.marina-recorde",
    tag: "Recordes",
    data: "14/06/2026",
    titulo: "Marina Costa bate recorde pessoal nos 50m Livre no Troféu Brasil Juvenil",
    resumo:
      "A nadadora do GN União fechou a prova em 28.31, melhorando sua marca anterior e subindo no ranking do RS.",
    href: "/atleta/376380",
  },
  {
    imageKey: "news.interclubes-cobertura",
    tag: "Cobertura",
    data: "06/08/2026",
    titulo: "Campeonato Brasileiro Interclubes 2026 começa em São Paulo com clima de decisão",
    resumo:
      "Acompanhe os resultados oficiais das séries ao vivo, prova a prova, direto da piscina de 50m.",
    href: "/campeonatos/brasileiro-interclubes-2026",
  },
  {
    imageKey: "news.calendario-temporada",
    tag: "Calendário",
    data: "19/09/2026",
    titulo: "Copa Sudeste de Natação abre inscrições para a próxima etapa da temporada",
    resumo:
      "Competição acontece no Rio de Janeiro, em piscina de 50m — confira datas e como acompanhar.",
    href: "/campeonatos/copa-sudeste-2026",
  },
];

export function NewsSection() {
  return (
    <section className="bg-navy-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
          Direto das piscinas
        </span>
        <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-balance max-w-xl text-white">
          O que virou manchete essa semana.
        </h2>
        <div className="mt-10">
          <Carousel>
            {NOTICIAS.map((n) => (
              <CarouselItem key={n.titulo} width="w-[300px] sm:w-[340px]">
                <NewsCard
                  image={IMAGES[n.imageKey]}
                  tag={n.tag}
                  data={n.data}
                  titulo={n.titulo}
                  resumo={n.resumo}
                  href={n.href}
                />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
