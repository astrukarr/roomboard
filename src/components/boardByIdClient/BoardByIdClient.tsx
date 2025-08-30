'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useBoard } from '@/store/board';
import Canvas from '../canvas/Canvas';

export default function BoardByIdClient({ id }: { id: string }) {
  const loadById = useBoard((s) => s.loadById);
  const router = useRouter();

  useEffect(() => {
    const ok = loadById(id);
    if (!ok) router.replace('/boards/new');
  }, [id, loadById, router]);

  return (
    <main className="h-[calc(100vh-4rem)] p-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 h-full">
        <Canvas />
      </div>
    </main>
  );
}
