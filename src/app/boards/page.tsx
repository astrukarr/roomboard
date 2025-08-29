'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { listBoards } from '@/lib/storage';
import type { BoardIndexItem } from '@/types';

export default function Page() {
  const [boards, setBoards] = useState<BoardIndexItem[]>([]);
  useEffect(() => setBoards(listBoards()), []);
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-xl font-semibold">My Boards</h1>
      <ul className="mt-4 divide-y">
        {boards.length === 0 && <li className="py-6 text-sm opacity-60">No boards yet.</li>}
        {boards.map((b) => (
          <li key={b.id} className="py-3 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">{b.name}</div>
              <div className="text-xs opacity-60">{new Date(b.updatedAt).toLocaleString()}</div>
            </div>
            <Link
              href={`/boards/${b.id}`}
              className="rounded border px-3 py-1 text-sm hover:bg-neutral-50"
            >
              Open
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
