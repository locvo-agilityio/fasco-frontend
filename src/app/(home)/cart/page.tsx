// Constants
import { BREADCRUMBS_CART } from '@/constants';

// Components
import { BannerSubscribe, Breadcrumbs } from '@/components';

// UI
import { CartWrapper } from '@/ui';

const CheckoutPage = () => (
  <main className="w-full flex flex-col items-center">
    <div className="container px-6">
      <div className="flex flex-col items-center justify-center pb-16 gap-5">
        <h2 className="font-volkhov text-3xl">Shopping Cart</h2>
        <Breadcrumbs breadcrumbs={BREADCRUMBS_CART} />
      </div>

      <CartWrapper />
    </div>

    <BannerSubscribe />
  </main>
);

export default CheckoutPage;
