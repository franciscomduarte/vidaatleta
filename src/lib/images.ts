export type ImageRef = {
  src: string | null;
  alt: string;
  credit?: string;
};

/**
 * Ponto único de referência para toda imagem do site. `src: null` renderiza
 * o fallback elegante do <ImageFrame> (gradiente + rótulo) em vez de uma
 * imagem quebrada — troque por um caminho em /public/images/... quando
 * tiver o acervo licenciado próprio; nada mais no layout precisa mudar.
 *
 * As fotos atuais em /public/images vêm do Wikimedia Commons (licenças
 * CC BY / CC BY-SA / domínio público, sem pessoas identificáveis nem
 * marcas de competição) — crédito de cada uma no campo `credit` e listado
 * no rodapé do site, como as licenças exigem.
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
    src: "/images/news.marina-recorde.jpg",
    alt: "Água de piscina esguichando sob luz de sol",
    credit: "Nenad Stojkovic, CC BY 2.0, via Wikimedia Commons",
  },
  "news.interclubes-cobertura": {
    src: "/images/news.interclubes-cobertura.jpg",
    alt: "Raias e blocos de partida de uma piscina olímpica vazia",
    credit: "KeepActive Australia, CC BY-SA 4.0, via Wikimedia Commons",
  },
  "news.calendario-temporada": {
    src: "/images/news.calendario-temporada.jpg",
    alt: "Piscina pública vista de cima, raias vazias",
    credit: "KeepActive Australia, CC BY-SA 4.0, via Wikimedia Commons",
  },

  "records.marina-costa": {
    src: "/images/records.marina-costa.jpg",
    alt: "Raia de piscina vista em ângulo, sem atletas",
    credit: "KeepActive Australia, CC BY-SA 4.0, via Wikimedia Commons",
  },
  "records.pedro-henrique": {
    src: "/images/records.pedro-henrique.jpg",
    alt: "Vista subaquática de uma piscina vazia",
    credit: "Steven Lek, domínio público, via Wikimedia Commons",
  },
  "records.gabriel-rocha": {
    src: "/images/records.gabriel-rocha.jpg",
    alt: "Piscina coberta, vista geral",
    credit: "localfitness.com.au, CC BY-SA 3.0, via Wikimedia Commons",
  },
  "records.thiago-almeida": {
    src: "/images/records.thiago-almeida.jpg",
    alt: "Água de piscina esguichando sob luz de sol",
    credit: "Nenad Stojkovic, CC BY 2.0, via Wikimedia Commons",
  },

  "championships.brasileiro-interclubes-2026": {
    src: "/images/championships.brasileiro-interclubes-2026.jpg",
    alt: "Raias e blocos de partida de uma piscina olímpica vazia",
    credit: "KeepActive Australia, CC BY-SA 4.0, via Wikimedia Commons",
  },
  "championships.trofeu-brasil-juvenil-2026": {
    src: "/images/championships.trofeu-brasil-juvenil-2026.jpg",
    alt: "Piscina pública vista de cima, raias vazias",
    credit: "KeepActive Australia, CC BY-SA 4.0, via Wikimedia Commons",
  },
  "championships.circuito-estadual-rs-2etapa": {
    src: "/images/championships.circuito-estadual-rs-2etapa.jpg",
    alt: "Vista subaquática de uma piscina vazia",
    credit: "Steven Lek, domínio público, via Wikimedia Commons",
  },
  "championships.copa-sudeste-2026": {
    src: "/images/championships.copa-sudeste-2026.jpg",
    alt: "Piscina coberta, vista geral",
    credit: "localfitness.com.au, CC BY-SA 3.0, via Wikimedia Commons",
  },
};

export function getImage(key: string): ImageRef {
  return IMAGES[key] ?? { src: null, alt: "" };
}
