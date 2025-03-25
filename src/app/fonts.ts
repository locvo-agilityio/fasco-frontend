import { Jost, Poppins, Volkhov } from 'next/font/google';

export const volkhov = Volkhov({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-volkhov',
  display: 'swap',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-poppins',
  display: 'swap',
});

export const jost = Jost({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-jost',
  display: 'swap',
});
