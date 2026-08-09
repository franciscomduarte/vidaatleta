import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
          {eyebrow}
        </span>
        <h1 className="mt-2 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-2xl text-secondary leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
