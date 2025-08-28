import Link from 'next/link';

export default function Page() {
  return (
    <main className="p-8 space-y-3">
      <h1 className="text-xl font-semibold">My Boards</h1>
      <p className="text-sm opacity-70">Nothing here yet.</p>
      <Link href="/boards/new" className="inline-block rounded-lg border px-4 py-2">
        Create new
      </Link>
    </main>
  );
}
