export default function Page() {
  return (
    <main className="h-screen grid grid-cols-12">
      <aside className="col-span-3 border-r p-4">Catalog (placeholder)</aside>
      <section className="col-span-9 p-4">
        <div className="h-full rounded-xl border border-dashed grid place-items-center">
          <p className="text-sm opacity-60">Canvas (placeholder)</p>
        </div>
      </section>
    </main>
  );
}
