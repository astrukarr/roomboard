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
    <main className="h-[calc(100vh-8rem)] p-4">
      <Canvas />
    </main>
  );
}
