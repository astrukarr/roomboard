'use client';
import { catalog } from '@/data/catalog';
import { useBoard } from '@/store/board';
import AddButton from '../buttons/AddButton';

export default function Catalog() {
  const add = useBoard((s) => s.addFromCatalog);

  return (
    <ul className="space-y-2">
      {catalog.map((it) => (
        <li key={it.id} className="flex items-center justify-between rounded-md border p-2">
          <div className="flex items-center gap-3">
            <span className="inline-block h-6 w-6 rounded" style={{ background: it.color }} />
            <div className="text-sm leading-tight">
              <div className="font-medium">{it.title}</div>
              <div className="opacity-60">
                {it.widthCm}×{it.depthCm} cm · €{it.price}
              </div>
            </div>
          </div>
          <AddButton onClick={() => add(it)} />
        </li>
      ))}
    </ul>
  );
}
