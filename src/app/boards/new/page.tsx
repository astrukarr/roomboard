import Canvas from '@/components/canvas/Canvas';
import Catalog from '@/components/catalog/Catalog';

export default function Page() {
  return (
    <main className="h-[calc(100vh-8rem)] grid grid-cols-12 gap-4 p-4">
      <aside className="col-span-4 lg:col-span-3 border rounded-lg p-3">
        <h2 className="mb-2 text-sm font-semibold">Catalog</h2>
        <Catalog />
      </aside>
      <section className="col-span-8 lg:col-span-9">
        <Canvas />
      </section>
    </main>
  );
}
