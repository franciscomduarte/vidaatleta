import { getAtleta } from "./mock-data";
import type { Atleta } from "./types";

/**
 * Sessão mock — único ponto de verdade para "quem é o atleta logado".
 *
 * No L3Swim esse vínculo estava hard-coded, duplicado e independente em
 * comparativo_atletas.php e dashboard.php (`registro = '376380'`). Aqui ele
 * é centralizado numa função só, lida de uma variável de ambiente, para que
 * trocar pelo vínculo real (usuário autenticado -> atleta) seja alterar um
 * lugar, não caçar literais espalhados pelo código.
 */
export function getAtletaLogado(): Atleta | undefined {
  const registro = process.env.NEXT_PUBLIC_MOCK_ATLETA_REGISTRO ?? "376380";
  return getAtleta(registro);
}
