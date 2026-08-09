import type { Atleta, Campeonato, Prova, Resultado } from "./types";

// Dados de exemplo para prototipagem de tela — não são resultados oficiais.

export const PROVAS: Prova[] = [
  { id: "50-livre", nome: "50m Livre" },
  { id: "100-livre", nome: "100m Livre" },
  { id: "200-livre", nome: "200m Livre" },
  { id: "100-costas", nome: "100m Costas" },
  { id: "100-peito", nome: "100m Peito" },
  { id: "100-borboleta", nome: "100m Borboleta" },
];

export const ATLETAS: Atleta[] = [
  { registro: "376380", nome: "Marina Costa", clube: "GN União", uf: "RS", categoria: "Juvenil 2", sexo: "F", nascimento: "2009-04-12" },
  { registro: "381224", nome: "Rafael Nogueira", clube: "Minas Tênis Clube", uf: "MG", categoria: "Júnior", sexo: "M", nascimento: "2007-11-03" },
  { registro: "379910", nome: "Ana Beatriz Souza", clube: "Fluminense", uf: "RJ", categoria: "Sênior", sexo: "F", nascimento: "2004-02-20" },
  { registro: "384501", nome: "Pedro Henrique Lima", clube: "Pinheiros", uf: "SP", categoria: "Sênior", sexo: "M", nascimento: "2003-07-15" },
  { registro: "377765", nome: "Júlia Ferreira", clube: "Unisanta", uf: "SP", categoria: "Juvenil 1", sexo: "F", nascimento: "2010-09-08" },
  { registro: "382290", nome: "Lucas Martins", clube: "GN União", uf: "RS", categoria: "Juvenil 2", sexo: "M", nascimento: "2009-01-30" },
  { registro: "380117", nome: "Beatriz Andrade", clube: "Minas Tênis Clube", uf: "MG", categoria: "Sênior", sexo: "F", nascimento: "2002-12-05" },
  { registro: "385633", nome: "Gabriel Rocha", clube: "Flamengo", uf: "RJ", categoria: "Júnior", sexo: "M", nascimento: "2006-05-27" },
  { registro: "378845", nome: "Laura Ribeiro", clube: "Pinheiros", uf: "SP", categoria: "Júnior", sexo: "F", nascimento: "2007-03-19" },
  { registro: "383372", nome: "Thiago Almeida", clube: "Unisanta", uf: "SP", categoria: "Sênior", sexo: "M", nascimento: "2001-10-11" },
];

export const CAMPEONATOS: Campeonato[] = [
  {
    id: "brasileiro-interclubes-2026",
    nome: "Campeonato Brasileiro Interclubes 2026",
    cidade: "São Paulo",
    uf: "SP",
    piscina: "50m",
    dataInicio: "2026-08-06",
    dataFim: "2026-08-10",
    status: "ao vivo",
  },
  {
    id: "trofeu-brasil-juvenil-2026",
    nome: "Troféu Brasil Juvenil 2026",
    cidade: "Belo Horizonte",
    uf: "MG",
    piscina: "50m",
    dataInicio: "2026-06-14",
    dataFim: "2026-06-18",
    status: "encerrado",
  },
  {
    id: "circuito-estadual-rs-2etapa",
    nome: "Circuito Estadual RS · 2ª Etapa",
    cidade: "Porto Alegre",
    uf: "RS",
    piscina: "25m",
    dataInicio: "2026-05-02",
    dataFim: "2026-05-03",
    status: "encerrado",
  },
  {
    id: "copa-sudeste-2026",
    nome: "Copa Sudeste de Natação 2026",
    cidade: "Rio de Janeiro",
    uf: "RJ",
    piscina: "50m",
    dataInicio: "2026-09-19",
    dataFim: "2026-09-21",
    status: "programado",
  },
];

// tempoCentesimos: tempo total em centésimos de segundo (ex.: 1:05.42 => 6542)
export const RESULTADOS: Resultado[] = [
  // 100m Livre — Brasileiro Interclubes (50m, ao vivo)
  { id: "r1", atletaRegistro: "384501", provaId: "100-livre", campeonatoId: "brasileiro-interclubes-2026", piscina: "50m", tempoCentesimos: 5021, colocacao: 1, recordePessoal: true },
  { id: "r2", atletaRegistro: "385633", provaId: "100-livre", campeonatoId: "brasileiro-interclubes-2026", piscina: "50m", tempoCentesimos: 5138, colocacao: 2, recordePessoal: false },
  { id: "r3", atletaRegistro: "383372", provaId: "100-livre", campeonatoId: "brasileiro-interclubes-2026", piscina: "50m", tempoCentesimos: 5204, colocacao: 3, recordePessoal: false },
  { id: "r4", atletaRegistro: "382290", provaId: "100-livre", campeonatoId: "brasileiro-interclubes-2026", piscina: "50m", tempoCentesimos: 5389, colocacao: 4, recordePessoal: true },

  { id: "r5", atletaRegistro: "379910", provaId: "100-livre", campeonatoId: "brasileiro-interclubes-2026", piscina: "50m", tempoCentesimos: 5698, colocacao: 1, recordePessoal: false },
  { id: "r6", atletaRegistro: "380117", provaId: "100-livre", campeonatoId: "brasileiro-interclubes-2026", piscina: "50m", tempoCentesimos: 5732, colocacao: 2, recordePessoal: true },
  { id: "r7", atletaRegistro: "376380", provaId: "100-livre", campeonatoId: "brasileiro-interclubes-2026", piscina: "50m", tempoCentesimos: 5910, colocacao: 3, recordePessoal: false },
  { id: "r8", atletaRegistro: "378845", provaId: "100-livre", campeonatoId: "brasileiro-interclubes-2026", piscina: "50m", tempoCentesimos: 6045, colocacao: 4, recordePessoal: false },

  // 50m Livre — Troféu Brasil Juvenil (50m, encerrado)
  { id: "r9", atletaRegistro: "382290", provaId: "50-livre", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 2483, colocacao: 2, recordePessoal: false },
  { id: "r10", atletaRegistro: "384501", provaId: "50-livre", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 2367, colocacao: 1, recordePessoal: false },
  { id: "r11", atletaRegistro: "376380", provaId: "50-livre", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 2831, colocacao: 3, recordePessoal: true },
  { id: "r12", atletaRegistro: "377765", provaId: "50-livre", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 2915, colocacao: 4, recordePessoal: false },

  // 200m Livre — Troféu Brasil Juvenil
  { id: "r13", atletaRegistro: "385633", provaId: "200-livre", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 11842, colocacao: 1, recordePessoal: false },
  { id: "r14", atletaRegistro: "383372", provaId: "200-livre", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 12005, colocacao: 2, recordePessoal: true },
  { id: "r15", atletaRegistro: "380117", provaId: "200-livre", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 13210, colocacao: 1, recordePessoal: false },

  // 100m Costas — Troféu Brasil Juvenil
  { id: "r16", atletaRegistro: "384501", provaId: "100-costas", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 5876, colocacao: 1, recordePessoal: false },
  { id: "r17", atletaRegistro: "382290", provaId: "100-costas", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 6203, colocacao: 2, recordePessoal: false },
  { id: "r18", atletaRegistro: "379910", provaId: "100-costas", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 6541, colocacao: 1, recordePessoal: true },

  // 100m Peito
  { id: "r19", atletaRegistro: "383372", provaId: "100-peito", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 6689, colocacao: 1, recordePessoal: false },
  { id: "r20", atletaRegistro: "378845", provaId: "100-peito", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 7415, colocacao: 1, recordePessoal: false },

  // 100m Borboleta
  { id: "r21", atletaRegistro: "385633", provaId: "100-borboleta", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 5734, colocacao: 1, recordePessoal: true },
  { id: "r22", atletaRegistro: "380117", provaId: "100-borboleta", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 6432, colocacao: 1, recordePessoal: false },

  // Circuito Estadual RS · 2ª Etapa (25m, encerrado) — histórico de Marina Costa
  { id: "r23", atletaRegistro: "376380", provaId: "100-livre", campeonatoId: "circuito-estadual-rs-2etapa", piscina: "25m", tempoCentesimos: 6690, colocacao: 2, recordePessoal: false },
  { id: "r24", atletaRegistro: "376380", provaId: "50-livre", campeonatoId: "circuito-estadual-rs-2etapa", piscina: "25m", tempoCentesimos: 2874, colocacao: 2, recordePessoal: false },
  { id: "r25", atletaRegistro: "382290", provaId: "100-livre", campeonatoId: "circuito-estadual-rs-2etapa", piscina: "25m", tempoCentesimos: 5512, colocacao: 1, recordePessoal: false },

  // mais fundo de tabela em 100m Livre 50m para popular o ranking
  { id: "r26", atletaRegistro: "377765", provaId: "100-livre", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 6187, colocacao: 5, recordePessoal: false },
  { id: "r27", atletaRegistro: "381224", provaId: "100-livre", campeonatoId: "trofeu-brasil-juvenil-2026", piscina: "50m", tempoCentesimos: 5312, colocacao: 2, recordePessoal: false },
];

export function getAtleta(registro: string): Atleta | undefined {
  return ATLETAS.find((a) => a.registro === registro);
}

export function getProva(provaId: string): Prova | undefined {
  return PROVAS.find((p) => p.id === provaId);
}

export function getCampeonato(id: string): Campeonato | undefined {
  return CAMPEONATOS.find((c) => c.id === id);
}

export function searchAtletas(query: string): Atleta[] {
  const termo = query.trim().toLowerCase();
  if (!termo) return [];
  return ATLETAS.filter(
    (a) =>
      a.nome.toLowerCase().includes(termo) ||
      a.clube.toLowerCase().includes(termo) ||
      a.registro.includes(termo)
  );
}

export type LinhaRanking = {
  posicao: number;
  atleta: Atleta;
  tempoCentesimos: number;
  campeonato: Campeonato;
};

/** Melhor tempo de cada atleta na prova/piscina, ordenado por tempo. */
export function getRanking(provaId: string, piscina: "25m" | "50m"): LinhaRanking[] {
  const melhores = new Map<string, Resultado>();
  for (const r of RESULTADOS) {
    if (r.provaId !== provaId || r.piscina !== piscina) continue;
    const atual = melhores.get(r.atletaRegistro);
    if (!atual || r.tempoCentesimos < atual.tempoCentesimos) {
      melhores.set(r.atletaRegistro, r);
    }
  }
  return [...melhores.values()]
    .sort((a, b) => a.tempoCentesimos - b.tempoCentesimos)
    .map((r, i) => ({
      posicao: i + 1,
      atleta: getAtleta(r.atletaRegistro)!,
      tempoCentesimos: r.tempoCentesimos,
      campeonato: getCampeonato(r.campeonatoId)!,
    }));
}

export type ResultadoAtleta = {
  resultado: Resultado;
  prova: Prova;
  campeonato: Campeonato;
};

export function getResultadosDoAtleta(registro: string): ResultadoAtleta[] {
  return RESULTADOS.filter((r) => r.atletaRegistro === registro)
    .map((resultado) => ({
      resultado,
      prova: getProva(resultado.provaId)!,
      campeonato: getCampeonato(resultado.campeonatoId)!,
    }))
    .sort((a, b) => a.campeonato.dataInicio.localeCompare(b.campeonato.dataInicio));
}

export function getMelhorTempo(registro: string, provaId: string): Resultado | undefined {
  return RESULTADOS.filter((r) => r.atletaRegistro === registro && r.provaId === provaId).sort(
    (a, b) => a.tempoCentesimos - b.tempoCentesimos
  )[0];
}

export function getResultadosDoCampeonato(campeonatoId: string): ResultadoAtleta[] {
  return RESULTADOS.filter((r) => r.campeonatoId === campeonatoId)
    .map((resultado) => ({
      resultado,
      prova: getProva(resultado.provaId)!,
      campeonato: getCampeonato(resultado.campeonatoId)!,
    }))
    .sort((a, b) => a.resultado.colocacao - b.resultado.colocacao);
}
