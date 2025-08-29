'use client';
import * as React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function AddButton({ children = 'Add', className = '', ...rest }: Props) {
  return (
    <button
      type="button"
      className={[
        'rounded border px-2 py-1 text-xs hover:bg-neutral-50 cursor-pointer',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
