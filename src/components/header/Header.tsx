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
    'text-sm transition-all duration-200 no-underline px-3 py-2 rounded-lg ' +
    (isActive
      ? 'text-beige-700 bg-beige-100 font-bold'
      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50');

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" onClick={onClick} className={base}>
        {label}
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="mx-auto flex h-16 items-center justify-between px-8">
        <Link href="/" className="flex items-center space-x-3 group">
          <span className="text-2xl font-bold text-gray-900 tracking-tight">RoomBoard</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <NavItem key={l.href} {...l} />
          ))}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-all duration-200 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="w-5 h-5 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-all duration-200 ${open ? 'rotate-45 translate-y-1' : ''}`}
            ></span>
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-all duration-200 mt-1 ${open ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-all duration-200 mt-1 ${open ? '-rotate-45 -translate-y-1' : ''}`}
            ></span>
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
          <nav className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-2" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <NavItem key={l.href} {...l} onClick={() => setOpen(false)} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
