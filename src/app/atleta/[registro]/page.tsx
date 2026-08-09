import PageStub from "@/components/PageStub";

export default async function AtletaPage({
  params,
}: {
  params: Promise<{ registro: string }>;
}) {
  const { registro } = await params;

  return (
    <PageStub
      from="NADAR + L3Swim"
      title={`Perfil do atleta · registro ${registro}`}
      description="Evolução pessoal (PBs), posição no ranking UF/nacional e recordes — mockup do NADAR, dados do schema atleta/resultado do L3Swim."
    />
  );
}
