export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="var(--color-accent)" />
      <path
        d="M5 13c2.2-2 4.4-2 6.6 0s4.4 2 6.6 0 4.4-2 6.6 0"
        stroke="var(--color-navy-950)"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M5 19c2.2-2 4.4-2 6.6 0s4.4 2 6.6 0 4.4-2 6.6 0"
        stroke="var(--color-navy-950)"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
