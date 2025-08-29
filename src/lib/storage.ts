import type { BoardItem } from '@/store/board';

export type BoardIndexItem = { id: string; name: string; updatedAt: string };
export type BoardSnapshot = { id: string; name: string; updatedAt: string; items: BoardItem[] };

const INDEX_KEY = 'rb_boards';
const KEY = (id: string) => `rb_board:${id}`;

export function listBoards(): BoardIndexItem[] {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(INDEX_KEY) ?? '[]');
  } catch {
    return [];
  }
}

export function saveBoardSnapshot(s: BoardSnapshot) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY(s.id), JSON.stringify(s));
  const list = listBoards().filter((b) => b.id !== s.id);
  list.unshift({ id: s.id, name: s.name, updatedAt: s.updatedAt });
  localStorage.setItem(INDEX_KEY, JSON.stringify(list));
}

export function loadBoardSnapshot(id: string): BoardSnapshot | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(KEY(id));
  return raw ? JSON.parse(raw) : null;
}
