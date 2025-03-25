'use client';

import React, { useTransition } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Checkbox,
  addToast,
} from '@heroui/react';
import { ShoppingBagIcon } from 'lucide-react';
import Link from 'next/link';

// Components
import { Button } from '@/components/common';
import InfoCart from './InfoCart';

// Utils
import { formatNumber, totalPrice } from '@/utils';

// Context
import { useCart } from '@/contexts';

// Constants
import {
  ERROR_MESSAGES,
  ROUTES,
  SUCCESS_MESSAGES,
  ToastType,
} from '@/constants';

// Actions
import { checkoutCart, updateQuantityProduct } from '@/actions';

const DrawerCart = () => {
  const { cart, updateCart, removeCart } = useCart();
  const [isPending, startTransition] = useTransition();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          onClose();

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
    <div>
      <div className="relative">
        <Button
          title="Cart"
          variant="ghost"
          size="md"
          color="primary"
          className="w-5 min-w-5 px-0 py-0 border-none data-[hover=true]:!bg-transparent data-[hover=true]:!text-primary-foreground"
          onPress={onOpen}
        >
          <ShoppingBagIcon className="text-primary-200" size={18} />
        </Button>
        {Boolean(cart.length) && (
          <span className="absolute top-0 left-3 flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-danger-300 rounded-full">
            {cart.length}
          </span>
        )}
      </div>
      <Drawer
        isOpen={isOpen}
        size="3xl"
        onClose={onClose}
        className="rounded-none"
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-6 items-start font-volkhov text-3xl font-normal">
                Shopping Cart
                <p className="font-poppins text-3md text-primary-100">
                  Buy <span className="font-bold text-black">$122.35</span> More
                  And Get{' '}
                  <span className="font-bold text-black">Free Shipping</span>
                </p>
              </DrawerHeader>
              <DrawerBody>
                {Boolean(cart.length) ? (
                  cart.map(
                    ({
                      productId,
                      image,
                      name,
                      color,
                      quantity: minQuantity,
                      size,
                      price,
                      priceSale,
                      totalQuantity,
                    }) => {
                      const keyCart = `cart-${productId}-${color}-${size}`;

                      return (
                        <InfoCart
                          key={keyCart}
                          productId={productId}
                          image={image}
                          name={name}
                          color={color}
                          minQuantity={minQuantity}
                          price={priceSale || price}
                          totalQuantity={totalQuantity}
                          onChangeQuantity={updateCart}
                        />
                      );
                    },
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="font-volkhov text-2md text-center text-black">
                      {ERROR_MESSAGES.EMPTY_CART}
                    </p>
                  </div>
                )}
              </DrawerBody>
              <DrawerFooter className="flex flex-col gap-4">
                <Checkbox
                  radius="none"
                  color="default"
                  className="w-full max-w-3xl pb-5 mt-5 border-b-1 border-primary-100"
                >
                  <p className="font-poppins text-2md text-primary-100">
                    For <span className="text-black">$10.00</span> please wrap
                    the product
                  </p>
                </Checkbox>

                <div className="w-full mt-11 flex justify-between font-volkhov text-2md">
                  <p>Subtotal</p>
                  <p>${formatNumber(totalPrice(cart))}</p>
                </div>

                <Button
                  onPress={handleCheckoutCart}
                  className="h-16 disabled:cursor-not-allowed"
                  isDisabled={!cart.length || isPending}
                  isLoading={isPending}
                >
                  Checkout
                </Button>
                <Button
                  as={Link}
                  href={ROUTES.CART}
                  color="primary"
                  variant="ghost"
                  size="md"
                  className="border-none text-black underline data-[hover=true]:!bg-transparent data-[hover=true]:!text-blue-500"
                >
                  View Cart
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerCart;
