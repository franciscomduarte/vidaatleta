type PageStubProps = {
  title: string;
  description: string;
  from: string;
};

export default function PageStub({ title, description, from }: PageStubProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <span className="inline-block rounded-full bg-card border border-subtle px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
        Em construção · vem de {from}
      </span>
      <h1 className="mt-4 font-display font-extrabold text-3xl tracking-tight text-balance">
        {title}
      </h1>
      <p className="mt-3 text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
