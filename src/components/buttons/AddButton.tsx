'use client';
import * as React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function AddButton({ children = 'Add', className = '', ...rest }: Props) {
  return (
    <button
      type="button"
      className={[
        'bg-neutral-600 text-white px-3 py-2 rounded-lg hover:bg-neutral-700 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center space-x-2 font-medium cursor-pointer',
        className,
      ].join(' ')}
      {...rest}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      <span>{children}</span>
    </button>
  );
}
