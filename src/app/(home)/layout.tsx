import { auth } from '@/auth';

// Components
import { Footer, Navbar } from '@/components';
import { CartProvider } from '@/contexts';

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
