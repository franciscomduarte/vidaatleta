export type Piscina = "25m" | "50m";
export type Sexo = "M" | "F";

export type Atleta = {
  registro: string;
  nome: string;
  clube: string;
  uf: string;
  categoria: string;
  sexo: Sexo;
  nascimento: string; // YYYY-MM-DD
};

export type Prova = {
  id: string;
  nome: string;
};

export type StatusCampeonato = "encerrado" | "ao vivo" | "programado";

export type Campeonato = {
  id: string;
  nome: string;
  cidade: string;
  uf: string;
  piscina: Piscina;
  dataInicio: string;
  dataFim: string;
  status: StatusCampeonato;
};

export type Resultado = {
  id: string;
  atletaRegistro: string;
  provaId: string;
  campeonatoId: string;
  piscina: Piscina;
  tempoCentesimos: number; // tempo total em centésimos de segundo
  colocacao: number;
  recordePessoal: boolean;
};
