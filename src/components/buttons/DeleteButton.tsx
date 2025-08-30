'use client';

import * as React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function DeleteButton({ children = 'Delete', className = '', ...rest }: Props) {
  return (
    <button
      type="button"
      className={[
        'bg-neutral-600 text-white px-3 py-2 rounded-lg hover:bg-neutral-700 transition-all duration-200  shadow-md hover:shadow-lg flex items-center space-x-2 font-medium cursor-pointer',
        className,
      ].join(' ')}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
}
