import { ReactNode } from 'react';
import type { Metadata } from 'next';

// Providers
import Providers from './providers';

// Fonts
import { jost, poppins, volkhov } from './fonts';

import './globals.css';

export const metadata: Metadata = {
  title: 'FASCO',
  description: 'FASCO SHOP',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body
      className={`${volkhov.variable} ${poppins.variable} ${jost.variable}`}
    >
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
