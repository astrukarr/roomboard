import Link from 'next/link';
export default function Page() {
  return (
    <main className="p-8">
      <h1 className="text-xl font-semibold">Not found</h1>
      <p className="mt-2 opacity-70">We couldn’t find that page.</p>
      <Link href="/" className="inline-block mt-4 rounded-lg border px-4 py-2">
        Go home
      </Link>
    </main>
  );
}
