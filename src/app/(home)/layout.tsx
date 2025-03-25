import { Metadata, Viewport } from 'next';

// Auth
import { auth } from '@/auth';

// Components
import { Footer, Navbar } from '@/components';

// Provider
import { CartProvider } from '@/contexts';

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

const SecondaryLayout = async ({ children }: { children: React.ReactNode }) => {
  const authData = await auth();
  const userId = authData?.user?.documentId || authData?.user?.email || '';
  const isAuthenticated = Boolean(authData?.user.jwt || authData?.user.jti);

  return (
    <CartProvider userId={userId}>
      <div className="flex flex-col min-h-screen items-center justify-between">
        <div className="w-full flex flex-col items-center">
          <div className="container">
            <Navbar isAuthenticated={isAuthenticated} />
          </div>
          {children}
        </div>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default SecondaryLayout;
