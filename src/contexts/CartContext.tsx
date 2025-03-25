'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { ICart } from '@/types';

// Utils
import {
  addToCart,
  clearCart,
  getCart,
  removeFromCart,
  updateQuantity,
} from '@/utils';

interface CartContextType {
  cart: ICart[];
  updateCart: ({ id, quantity, productId }: ICart) => void;
  addCart: (cart: ICart) => void;
  removeCart: () => void;
  removeProductFromCart: ({ productId, color, size }: ICart) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({
  userId,
  children,
}: {
  userId: string;
  children: ReactNode;
}) => {
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    setCart(getCart(userId));
  }, [userId]);

  const updateCart = ({ quantity, productId }: ICart) => {
    const updatedCart = updateQuantity({
      id: userId,
      quantity,
      productId,
    } as ICart);

    setCart(updatedCart);
  };

  const addCart = (cart: ICart) => {
    const updatedCart = addToCart(cart);
    setCart(updatedCart);
  };

  const removeCart = () => {
    clearCart(userId);
    setCart(getCart(userId));
  };

  const removeProductFromCart = ({ productId, color, size }: ICart) => {
    const updatedCart = removeFromCart({
      id: userId,
      productId,
      color,
      size,
    } as ICart);

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, updateCart, addCart, removeCart, removeProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
