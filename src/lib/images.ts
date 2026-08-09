export type ImageRef = {
  src: string | null;
  alt: string;
};

/**
 * Ponto único de referência para toda imagem do site. `src: null` renderiza
 * o fallback elegante do <ImageFrame> (gradiente + rótulo) em vez de uma
 * imagem quebrada — troque por um caminho em /public/images/... quando
 * tiver a foto real; nada mais no layout precisa mudar.
 *
 * Não usamos fotos de bancos de imagem de terceiros (Unsplash/Pexels) aqui
 * para não depender de fetch externo nem de créditos — os slots ficam
 * como fallback até você colar o acervo licenciado.
 */
export const IMAGES: Record<string, ImageRef> = {
  "hero.main": {
    src: "/hero-underwater.jpg",
    alt: "Nadador em prova de nado livre, vista subaquática",
  },
  "live.pool-texture": {
    src: "/hero-underwater.jpg",
    alt: "",
  },

  "news.marina-recorde": {
    src: null,
    alt: "Marina Costa na saída dos 50m Livre",
  },
  "news.interclubes-cobertura": {
    src: null,
    alt: "Piscina do Campeonato Brasileiro Interclubes 2026",
  },
  "news.calendario-temporada": {
    src: null,
    alt: "Largada em bloco de partida, piscina olímpica",
  },

  "records.marina-costa": {
    src: null,
    alt: "Marina Costa, recorde pessoal nos 50m Livre",
  },
  "records.pedro-henrique": {
    src: null,
    alt: "Pedro Henrique Lima, recorde pessoal nos 100m Livre",
  },
  "records.gabriel-rocha": {
    src: null,
    alt: "Gabriel Rocha, recorde pessoal nos 100m Borboleta",
  },
  "records.thiago-almeida": {
    src: null,
    alt: "Thiago Almeida, recorde pessoal nos 200m Livre",
  },

  "championships.brasileiro-interclubes-2026": {
    src: null,
    alt: "Capa do Campeonato Brasileiro Interclubes 2026",
  },
  "championships.trofeu-brasil-juvenil-2026": {
    src: null,
    alt: "Capa do Troféu Brasil Juvenil 2026",
  },
  "championships.circuito-estadual-rs-2etapa": {
    src: null,
    alt: "Capa do Circuito Estadual RS · 2ª Etapa",
  },
  "championships.copa-sudeste-2026": {
    src: null,
    alt: "Capa da Copa Sudeste de Natação 2026",
  },
};

export function getImage(key: string): ImageRef {
  return IMAGES[key] ?? { src: null, alt: "" };
}
