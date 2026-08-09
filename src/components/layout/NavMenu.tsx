import Link from "next/link";

export type NavItem = {
  href: string;
  label: string;
  children?: NavItem[];
};

function ChevronDown() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M2 3.5 5 6.5 8 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NavMenu({
  items,
  className = "",
}: {
  items: NavItem[];
  className?: string;
}) {
  return (
    <nav className={`hidden md:flex items-center gap-x-7 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="inline-flex items-center gap-1 border-b-2 border-transparent py-2 text-xs font-semibold uppercase tracking-widest text-white/70 transition-colors hover:border-accent hover:text-accent"
        >
          {item.label}
          {item.children && <ChevronDown />}
        </Link>
      ))}
    </nav>
  );
}
