export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="p-8">
      <h1 className="text-xl font-semibold">Board {params.id}</h1>
      <p className="text-sm opacity-70">Placeholder view for a saved board.</p>
    </main>
  );
}
