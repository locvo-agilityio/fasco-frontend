'use client';

import { useTransition } from 'react';
import { addToast, Checkbox } from '@heroui/react';

// Components
import { TableProduct } from '@/components';
import { Button } from '@/components/common';

// Utils
import { formatNumber, totalPrice } from '@/utils';

// Context
import { useCart } from '@/contexts';

// Actions
import { checkoutCart, updateQuantityProduct } from '@/actions';

// Constants
import { ERROR_MESSAGES, SUCCESS_MESSAGES, ToastType } from '@/constants';

interface ICartUIProps {
  userId: string;
}

const CartUI = ({ userId }: ICartUIProps) => {
  const { cart, updateCart, removeCart } = useCart();
  const [isPending, startTransition] = useTransition();
  const subTotal = totalPrice(cart) || 0;

  const handleCheckoutCart = async () => {
    try {
      startTransition(async () => {
        const carts = await checkoutCart(cart);

        await Promise.all(
          carts.filter(Boolean).map(async (item) => {
            if (item?.productId) {
              await updateQuantityProduct(
                item.productId,
                item.quantity,
                item.quantityCart,
              );
            }
          }),
        );

        startTransition(() => {
          removeCart();

          addToast({
            description: SUCCESS_MESSAGES.CHECKOUT_SUCCESS,
            color: ToastType.SUCCESS,
          });
        });
      });
    } catch (error) {
      addToast({
        description:
          error instanceof Error ? error.message : ERROR_MESSAGES.UNKNOWN_ERROR,
        color: 'danger',
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-end">
      <TableProduct userId={userId} rows={cart} onChangeQuantity={updateCart} />

      {cart.length > 0 && (
        <div className="flex flex-col w-full max-w-[610px] mt-8">
          <Checkbox
            radius="none"
            color="default"
            className="w-full max-w-3xl pb-5 mt-5 border-b-1 border-primary-100"
            size="lg"
          >
            <p className="font-poppins text-2md text-primary-100">
              For <span className="text-black">$10.00</span> please wrap the
              product
            </p>
          </Checkbox>

          <div className="w-full mt-11 flex justify-between font-volkhov text-2md">
            <p>Subtotal</p>
            <p>${formatNumber(subTotal)}</p>
          </div>

          <Button
            className="h-16 mt-7"
            onPress={handleCheckoutCart}
            isDisabled={isPending}
            isLoading={isPending}
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartUI;
