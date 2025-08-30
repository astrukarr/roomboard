'use client';

import { useRouter } from 'next/navigation';
import { useBoard } from '@/store/board';

export default function EditorToolbar() {
  const router = useRouter();
  const saveAsNew = useBoard((s) => s.saveAsNew);

  return (
    <div className="mb-6 flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-semibold text-gray-900">Room Designer</h2>
        <span className="text-sm text-gray-500 bg-neutral-100 px-3 py-1 rounded-full font-medium">
          Canvas Mode
        </span>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => {
            const id = saveAsNew('Untitled');
            router.push(`/boards/${id}`);
          }}
          className="bg-neutral-600 text-white px-6 py-3 rounded-lg hover:bg-neutral-700 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg font-medium flex items-center space-x-2 cursor-pointer"
        >
          <span>Save Board</span>
        </button>

        <button className="bg-gray-100 text-gray-700 px-10 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md font-medium flex items-center space-x-2 cursor-pointer">
          <span>Export</span>
        </button>
      </div>
    </div>
  );
}
