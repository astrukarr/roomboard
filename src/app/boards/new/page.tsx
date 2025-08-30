import Canvas from '@/components/canvas/Canvas';
import Catalog from '@/components/catalog/Catalog';
import EditorToolbar from '@/components/editorToolbar/EditorToolbar';

export default function Page() {
  return (
    <main className="h-[calc(100vh-4rem)] grid grid-cols-12 gap-6 p-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Left Sidebar - Catalog */}
      <aside className="col-span-4 lg:col-span-3 space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
          <Catalog />
        </div>
      </aside>

      {/* Main Canvas Area */}
      <section className="col-span-8 lg:col-span-9 space-y-6">
        <EditorToolbar />
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 h-full">
          <Canvas />
        </div>
      </section>
    </main>
  );
}
