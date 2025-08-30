'use client';

import { catalog } from '@/data/catalog';
import { useBoard } from '@/store/board';
import AddButton from '../buttons/AddButton';

export default function Catalog() {
  const add = useBoard((s) => s.addFromCatalog);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Furniture Catalog</h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
          {catalog.length} items
        </span>
      </div>

      <div className="space-y-3">
        {catalog.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"
                  style={{ background: item.color }}
                />
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="font-medium text-blue-600">€{item.price}</span>
                  </div>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <AddButton onClick={() => add(item)} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {catalog.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No items available</h3>
          <p className="text-gray-600">The furniture catalog is empty</p>
        </div>
      )}
    </div>
  );
}
