import BoardByIdClient from '@/components/boardByIdClient/BoardByIdClient';
import { use } from 'react';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // ✅ unwrap params
  return <BoardByIdClient id={id} />;
}
