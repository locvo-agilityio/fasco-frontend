import { Metadata, Viewport } from 'next';

// Constants
import { APP_URL, METADATA } from '@/constants';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
  keywords: METADATA.KEY_WORDS,
  openGraph: {
    type: 'website',
    url: APP_URL,
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

const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen w-screen items-center justify-center p-10">
    {children}
  </div>
);

export default AuthLayout;
