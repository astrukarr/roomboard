'use client';
import { useRouter } from 'next/navigation';
import { useBoard } from '@/store/board';

export default function EditorToolbar() {
  const router = useRouter();
  const saveAsNew = useBoard((s) => s.saveAsNew);

  return (
    <div className="mb-3 flex items-center gap-2">
      <button
        onClick={() => {
          const id = saveAsNew('Untitled');
          router.push(`/boards/${id}`);
        }}
        className="rounded border px-3 py-1.5 text-sm hover:bg-neutral-50"
      >
        Save
      </button>
    </div>
  );
}
