'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type NavLink = { href: string; label: string; external?: boolean };

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/how-to-use', label: 'How To Use' },
  { href: '/boards/new', label: 'New Board' },
  { href: '/boards', label: 'My Boards' },
  // { href: 'https://github.com/astrukarr/roomboard', label: 'GitHub', external: true },
];

function NavItem({
  href,
  label,
  external,
  onClick,
}: {
  href: string;
  label: string;
  external?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive =
    !external &&
    (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/'));

  const base =
    'text-sm transition-colors no-underline ' +
    (isActive ? 'text-neutral-900 font-medium' : 'text-neutral-600 hover:text-neutral-900');

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" onClick={onClick} className={base}>
        {label}
        {isActive && <span className="ml-1 inline-block h-0.5 w-4 align-middle bg-neutral-900" />}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={base}>
      {label}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-100 backdrop-blur py-4">
      <div className="mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="text-4xl tracking-wide">
          RoomBoard
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <NavItem key={l.href} {...l} />
          ))}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="block h-0.5 w-5 bg-neutral-800"></span>
          <span className="mt-1 block h-0.5 w-5 bg-neutral-800"></span>
          <span className="mt-1 block h-0.5 w-5 bg-neutral-800"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <nav className="mx-auto max-w-5xl px-6 py-3 flex flex-col gap-3" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <NavItem key={l.href} {...l} onClick={() => setOpen(false)} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
