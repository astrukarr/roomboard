'use client';

import Moveable, {
  type OnDrag,
  type OnDragEnd,
  type OnResize,
  type OnResizeEnd,
  type OnRotate,
  type OnRotateEnd,
} from 'react-moveable';
import { useEffect, useMemo, useRef } from 'react';
import { useBoard } from '@/store/board';
import DeleteButton from '../buttons/DeleteButton';

export default function Canvas() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  // Per-item refs so Moveable always has the exact DOM target
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});

  const { items, selectedId, select, update, load, remove } = useBoard();
  const selected = useMemo(
    () => items.find((i) => i.id === selectedId) ?? null,
    [items, selectedId],
  );

  // Load from localStorage (if any)
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard Delete/Backspace to remove the selected item
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!selectedId) return;
      if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        remove(selectedId);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [remove, selectedId]);

  // Helper to set per-item ref
  const setItemRef =
    (id: string) =>
    (el: HTMLElement | null): void => {
      itemRefs.current[id] = el;
    };

  // Moveable target = currently selected element
  const targetEl = selectedId ? (itemRefs.current[selectedId] ?? null) : null;

  // Handlers — typed from react-moveable
  const handleDrag: (e: OnDrag) => void = ({ target, left, top }) => {
    if (target) {
      (target as HTMLElement).style.left = `${left}px`;
      (target as HTMLElement).style.top = `${top}px`;
    }
  };
  const handleDragEnd: (e: OnDragEnd) => void = ({ target }) => {
    if (!target || !selected) return;
    update(selected.id, {
      x: parseFloat((target as HTMLElement).style.left),
      y: parseFloat((target as HTMLElement).style.top),
    });
  };

  const handleResize: (e: OnResize) => void = ({ target, width, height }) => {
    if (target) {
      (target as HTMLElement).style.width = `${width}px`;
      (target as HTMLElement).style.height = `${height}px`;
    }
  };
  const handleResizeEnd: (e: OnResizeEnd) => void = ({ target }) => {
    if (!target || !selected) return;
    update(selected.id, {
      w: parseFloat((target as HTMLElement).style.width),
      h: parseFloat((target as HTMLElement).style.height),
    });
  };

  const handleRotate: (e: OnRotate) => void = ({ target, beforeRotate }) => {
    if (target) {
      (target as HTMLElement).style.transform = `rotate(${beforeRotate}deg)`;
    }
  };
  const handleRotateEnd: (e: OnRotateEnd) => void = ({ lastEvent }) => {
    if (!selected || !lastEvent) return;
    update(selected.id, { rotation: lastEvent.beforeRotate });
  };

  return (
    <div
      ref={canvasRef}
      className="relative h-full rounded-xl border border-dashed bg-white/40"
      onMouseDown={(e) => {
        // Click on empty canvas → deselect
        if (e.currentTarget === e.target) select(null);
      }}
    >
      {/* items */}
      {items.map((it) => (
        <div
          key={it.id}
          ref={setItemRef(it.id)}
          onMouseDown={() => select(it.id)}
          className={[
            'absolute cursor-move rounded-md shadow-sm outline-0 transition-shadow',
            it.id === selectedId ? 'ring-neutral-900' : 'ring-neutral-300',
          ].join(' ')}
          style={{
            left: it.x,
            top: it.y,
            width: it.w,
            height: it.h,
            transform: `rotate(${it.rotation}deg)`,
            background: it.color,
            zIndex: it.id === selectedId ? 2 : 1,
          }}
          title={`${it.title} • €${it.price}`}
        />
      ))}

      {/* Moveable only when selection + DOM target exist */}
      {selected && targetEl && canvasRef.current && (
        <Moveable
          target={targetEl}
          container={canvasRef.current}
          origin={false}
          draggable
          resizable
          rotatable
          // Handles on all sides/corners
          renderDirections={['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']}
          // Granularity
          throttleDrag={0}
          throttleResize={0}
          throttleRotate={0}
          // Handlers
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onResize={handleResize}
          onResizeEnd={handleResizeEnd}
          onRotate={handleRotate}
          onRotateEnd={handleRotateEnd}
          // UX
          keepRatio={false}
          edge={false}
          snappable={false}
        />
      )}
      {selected && (
        <div className="pointer-events-auto absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-md border bg-white/90 px-2 py-1 text-xs shadow">
          <span className="font-medium">{selected.title}</span>
          <span className="opacity-60">€{selected.price}</span>
          <DeleteButton onClick={() => remove(selected.id)} />
        </div>
      )}
    </div>
  );
}
