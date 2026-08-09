import { SectionHeader } from "@/components/ui/SectionHeader";
import { ComparadorAtletas } from "@/components/ComparadorAtletas";
import { getAtletaLogado } from "@/lib/session";

export default async function CompararPage({
  searchParams,
}: {
  searchParams: Promise<{ adversario?: string }>;
}) {
  const { adversario } = await searchParams;
  const atletaLogado = getAtletaLogado();

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <SectionHeader
        eyebrow="Cabeça a cabeça"
        title="Comparar atletas"
        description="Tempos lado a lado por prova, resolvido a partir da sessão do atleta logado em vez de um registro fixo no código."
      />

      {atletaLogado ? (
        <div className="mt-8">
          <ComparadorAtletas atletaLogado={atletaLogado} adversarioInicial={adversario} />
        </div>
      ) : (
        <p className="mt-8 text-secondary">
          Nenhum atleta logado (configure NEXT_PUBLIC_MOCK_ATLETA_REGISTRO).
        </p>
      )}
    </div>
  );
}
