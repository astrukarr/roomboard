import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Use | RoomBoard',
  description: 'Quick guide to creating boards in RoomBoard.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 space-y-10">
      <header className="space-y-2 text-center">
        <h1 className="font-playfair text-3xl sm:text-4xl">How to Use RoomBoard</h1>
        <p className="text-sm text-neutral-600">
          A quick guide to building simple room moodboards & layouts.
        </p>
      </header>

      {/* Quick Start */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Quick Start</h2>
        <ol className="list-decimal pl-5 space-y-2 text-sm">
          <li>
            Go to{' '}
            <Link href="/boards/new" className="underline">
              New Board
            </Link>
            .
          </li>
          <li>
            Drag items from the <em>Catalog</em> onto the <em>Canvas</em> (sofa, chair, table…).
          </li>
          <li>
            Arrange them, then <strong>Save</strong> (stores locally) or <strong>Export</strong> as
            PNG
            <span className="opacity-60"> (export coming soon)</span>.
          </li>
        </ol>
      </section>

      {/* Canvas controls */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Canvas Controls</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <strong>Move</strong>: drag an item anywhere on the canvas.
          </li>
          <li>
            <strong>Resize</strong>: use corner handles{' '}
            <span className="opacity-60">(Shift to lock ratio)</span>.
          </li>
          <li>
            <strong>Rotate</strong>: use the rotate handle{' '}
            <span className="opacity-60">(fine-tune coming soon)</span>.
          </li>
          <li>
            <strong>Delete</strong>: select an item → press <kbd>Backspace</kbd>{' '}
            <span className="opacity-60">(coming soon)</span>.
          </li>
        </ul>
      </section>

      {/* Catalog */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Catalog</h2>
        <p className="text-sm">
          The Catalog contains basic placeholders (sofa, table, chair, lamp) with approximate
          dimensions and prices. You can duplicate items to try multiple variants. Real “cutout”
          images will be added later.
        </p>
      </section>

      {/* Colors */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Color Palette</h2>
        <p className="text-sm">
          Upload a photo of your room to extract ~5 dominant colors for quick matching
          <span className="opacity-60"> (feature in progress)</span>.
        </p>
      </section>

      {/* Saving */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Saving & Loading</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <strong>Save</strong>: boards are stored in your browser (localStorage).
          </li>
          <li>
            <strong>Open later</strong>: visit{' '}
            <Link href="/boards" className="underline">
              My Boards
            </Link>{' '}
            or the board’s URL.
          </li>
          <li>
            <strong>Privacy</strong>: no account, no server — data stays on your device.
          </li>
        </ul>
      </section>

      {/* Export */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Export</h2>
        <p className="text-sm">
          Export the canvas as a PNG image to share with clients or friends
          <span className="opacity-60"> (coming soon)</span>.
        </p>
      </section>

      {/* Tips */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Tips</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Start with large pieces (sofa, rug), then add accents (lamp, plants, art).</li>
          <li>Try two versions: light & airy vs. warm & moody — decide by comparison.</li>
          <li>Keep item sizes proportional; use preset sizes to stay realistic.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <details className="text-sm">
          <summary className="cursor-pointer font-medium">Where are my boards stored?</summary>
          <p className="mt-2 opacity-80">Locally in your browser (no cloud yet).</p>
        </details>
        <details className="text-sm">
          <summary className="cursor-pointer font-medium">Can I use my own images?</summary>
          <p className="mt-2 opacity-80">
            Planned: upload cutout PNGs and place them on the canvas.
          </p>
        </details>
      </section>
    </main>
  );
}
