import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

// Providers
import Providers from './providers';

// Fonts
import { jost, poppins, volkhov } from './fonts';

// Constants
import { BASE_URL, METADATA } from '@/constants';

import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
  keywords: METADATA.KEY_WORDS,
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    siteName: METADATA.TITLE,
  },
  twitter: {
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    card: 'summary',
  },
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
