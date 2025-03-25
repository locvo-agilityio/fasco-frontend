// Auth
import { auth } from '@/auth';

// UI
import CartUI from '../CartUI';

const CartWrapper = async () => {
  const authData = await auth();
  const userId = authData?.user.documentId || '';

  return <CartUI userId={userId} />;
};

export default CartWrapper;
