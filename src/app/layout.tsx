import type { Metadata } from 'next';
import './globals.css';
import { instrumentSans, inter, playfair } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'RoomBoard',
  description: 'Quick room moodboards & layouts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="font-instrumentSans antialiased">{children}</body>
    </html>
  );
}
