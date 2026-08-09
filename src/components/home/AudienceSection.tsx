const AUDIENCES = [
  {
    eyebrow: "Pais e famílias",
    title: "Seu filho entra na água, você não perde nada.",
    body: "Horário, raia e série, antes da largada. E o tempo oficial chega na sua tela assim que a mão encosta na parede — de onde você estiver.",
    link: "Avisos em tempo real",
    gradient: "from-brand to-navy-950",
  },
  {
    eyebrow: "Atletas",
    title: "Seu próximo recorde começa na próxima prova.",
    body: "Marca pessoal, curva de evolução e sua posição exata nos rankings estadual e nacional — você sempre sabe quanto falta pra subir.",
    link: "Sua curva de evolução",
    gradient: "from-navy-900 to-navy-950",
  },
  {
    eyebrow: "Fãs da natação",
    title: "Torça como se estivesse na arquibancada.",
    body: "Marque seus favoritos, siga as séries minuto a minuto e veja o resultado oficial no instante em que ele sai da água.",
    link: "Direto da piscina",
    gradient: "from-navy-950 to-navy-950",
  },
];

export function AudienceSection() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
          Gente que vive à beira da piscina
        </span>
        <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-balance max-w-xl">
          Na raia ou na arquibancada, a emoção é a mesma.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {AUDIENCES.map((a) => (
            <article
              key={a.eyebrow}
              className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${a.gradient} p-6 text-white min-h-[280px] flex flex-col`}
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {a.eyebrow}
              </span>
              <h3 className="mt-2 font-display font-semibold text-xl leading-snug text-balance">
                {a.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{a.body}</p>
              <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                {a.link}
                <span aria-hidden>→</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
