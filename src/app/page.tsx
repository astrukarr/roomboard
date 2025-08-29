import Link from 'next/link';

export default function Page() {
  return (
    <main className="p-8 space-y-4">
      <p className="text-sm opacity-70">Quick room moodboards & layouts.</p>
      <div className="space-x-3">
        <Link href="/boards/new" className="rounded-lg border px-4 py-2">
          Open Board
        </Link>
        <Link href="/boards" className="rounded-lg border px-4 py-2">
          My Boards
        </Link>
      </div>
    </main>
  );
}
