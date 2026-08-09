import { getAtleta } from "./mock-data";
import type { Atleta } from "./types";

/**
 * Sessão mock — único ponto de verdade para "quem é o atleta logado".
 *
 * Centralizado numa função só, lida de uma variável de ambiente, para que
 * trocar pelo vínculo real (usuário autenticado -> atleta) seja alterar um
 * lugar, não caçar literais espalhados pelo código.
 */
export function getAtletaLogado(): Atleta | undefined {
  const registro = process.env.NEXT_PUBLIC_MOCK_ATLETA_REGISTRO ?? "376380";
  return getAtleta(registro);
}
