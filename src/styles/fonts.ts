// src/styles/fonts.ts
import { Instrument_Sans, Inter, Playfair_Display } from 'next/font/google';

export const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--fontFamily-instrumentSans',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--fontFamily-inter',
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--fontFamily-playfair',
});
