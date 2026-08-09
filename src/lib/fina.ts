import type { Sexo } from "./types";

/**
 * Tempos de referência (piscina 50m) usados na fórmula de pontos FINA/World
 * Aquatics: P = 1000 × (base / tempo)³. Valores aproximados para
 * prototipagem, não são a tabela oficial vigente.
 */
export const BASE_TIMES_CENTESIMOS: Record<string, Partial<Record<Sexo, number>>> = {
  "50-livre": { M: 2091, F: 2361 },
  "100-livre": { M: 4640, F: 5171 },
  "200-livre": { M: 10200, F: 11298 },
  "100-costas": { M: 5160, F: 5733 },
  "100-peito": { M: 5688, F: 6413 },
  "100-borboleta": { M: 4945, F: 5548 },
};

export function calcularPontosFina(
  provaId: string,
  sexo: Sexo,
  tempoCentesimos: number
): number | undefined {
  const base = BASE_TIMES_CENTESIMOS[provaId]?.[sexo];
  if (!base || !tempoCentesimos) return undefined;
  return Math.round(1000 * (base / tempoCentesimos) ** 3);
}
