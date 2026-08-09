const AUDIENCES = [
  {
    eyebrow: "Pais e famílias",
    title: "Acompanhe cada prova do seu filho.",
    body: "Saiba a série, a raia e o horário. Receba o tempo oficial no instante em que ele toca a borda — de onde você estiver.",
    link: "Notificação ao vivo",
    gradient: "from-brand to-navy-950",
  },
  {
    eyebrow: "Atletas",
    title: "Veja seu tempo cair, centésimo a centésimo.",
    body: "PBs, evolução por prova e sua posição no ranking da sua UF e nacional. Saiba exatamente quanto falta para subir.",
    link: "Evolução por prova",
    gradient: "from-navy-900 to-navy-950",
  },
  {
    eyebrow: "Fãs da natação",
    title: "Viva a competição em tempo real.",
    body: "Favorite atletas e clubes, acompanhe as séries ao vivo e veja os resultados oficiais assim que eles saem.",
    link: "Provas ao vivo",
    gradient: "from-navy-950 to-navy-950",
  },
];

export function AudienceSection() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
          Para quem vive a natação
        </span>
        <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-balance max-w-xl">
          Para quem está na água — e para quem torce por ela.
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
