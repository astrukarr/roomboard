import type { Metadata } from 'next';
import './globals.css';
import { instrumentSans, inter, playfair } from '@/styles/fonts';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

export const metadata: Metadata = {
  title: 'RoomBoard',
  description: 'Quick room moodboards & layouts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-instrumentSans antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
