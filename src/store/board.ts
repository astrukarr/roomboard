import { create } from 'zustand';
import { saveBoardSnapshot, loadBoardSnapshot } from '@/lib/storage';

export type BoardItem = {
  id: string;
  productId: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rotation: number;
  color: string;
  title: string;
  price: number;
};

type State = {
  items: BoardItem[];
  selectedId: string | null;
  addFromCatalog: (c: {
    id: string;
    title: string;
    color: string;
    widthCm: number;
    depthCm: number;
    price: number;
  }) => void;
  update: (id: string, patch: Partial<BoardItem>) => void;
  remove: (id: string) => void;
  select: (id: string | null) => void;
  load: () => void;
  saveAsNew: (name?: string) => string;
  loadById: (id: string) => boolean;
};

const P2C = 3;

export const useBoard = create<State>((set, get) => ({
  items: [],
  selectedId: null,

  addFromCatalog: (c) =>
    set((s) => {
      const id = crypto.randomUUID();
      return {
        items: [
          ...s.items,
          {
            id,
            productId: c.id,
            title: c.title,
            color: c.color,
            price: c.price,
            x: 80 + s.items.length * 20,
            y: 80 + s.items.length * 20,
            w: Math.max(60, Math.round(c.widthCm * P2C)),
            h: Math.max(40, Math.round(c.depthCm * P2C)),
            rotation: 0,
          },
        ],
        selectedId: id,
      };
    }),

  update: (id, patch) =>
    set((s) => ({ items: s.items.map((it) => (it.id === id ? { ...it, ...patch } : it)) })),
  remove: (id) =>
    set((s) => ({
      items: s.items.filter((it) => it.id !== id),
      selectedId: s.selectedId === id ? null : s.selectedId,
    })),
  select: (id) => set({ selectedId: id }),

  load: () => {
    if (typeof window === 'undefined') return;
    const raw = localStorage.getItem('rb_board_tmp');
    if (raw) set({ items: JSON.parse(raw) });
  },
  saveAsNew: (name = 'Untitled') => {
    const { items } = get();
    const id = crypto.randomUUID();
    saveBoardSnapshot({ id, name, updatedAt: new Date().toISOString(), items });
    return id;
  },

  loadById: (id) => {
    const snap = loadBoardSnapshot(id);
    if (!snap) return false;
    set({ items: snap.items, selectedId: null });
    return true;
  },
}));

if (typeof window !== 'undefined') {
  useBoard.subscribe((s) => {
    localStorage.setItem('rb_board_tmp', JSON.stringify(s.items));
  });
}
