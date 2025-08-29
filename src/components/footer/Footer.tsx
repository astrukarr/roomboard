// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto bg-neutral-100 text-neutral-700">
      <div className="mx-auto max-w-5xl px-6">
        {/* linkovi u jednom redu, centrirani */}
        <nav className="flex h-16 items-center justify-center gap-6 flex-nowrap text-sm">
          <Link href="/about" className="hover:underline">
            About us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link
            href="https://github.com/astrukarr/roomboard"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/andjela-strukar"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </Link>
        </nav>

        <div className="h-10 flex items-center justify-center text-xs text-neutral-500">
          © {new Date().getFullYear()} RoomBoard
        </div>
      </div>
    </footer>
  );
}
