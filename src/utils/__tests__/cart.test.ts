import {
  addToCart,
  getCart,
  updateQuantity,
  clearCart,
  removeFromCart,
} from '@/utils/cart';
import { ICart } from '@/types';

beforeEach(() => {
  localStorage.clear();
});

describe('Cart Utils', () => {
  const cartItem: ICart = {
    id: 'user1',
    productId: 'product1',
    name: 'Test Product',
    color: 'red',
    size: 'M',
    price: 100,
    image: 'image.jpg',
    totalQuantity: 10,
    quantity: 1,
    total: 100,
  };

  it('should add item to cart', () => {
    const cart = addToCart(cartItem);
    expect(cart).toHaveLength(1);
    expect(cart[0]).toMatchObject(cartItem);
  });

  it('should retrieve cart items', () => {
    addToCart(cartItem);
    const cart = getCart('user1');
    expect(cart).toHaveLength(1);
    expect(cart[0]).toMatchObject(cartItem);
  });

  it('should update quantity of an existing item', () => {
    addToCart(cartItem);
    const updatedCart = updateQuantity({ ...cartItem, quantity: 5 });
    expect(updatedCart[0].quantity).toBe(5);
    expect(updatedCart[0].total).toBe(500);
  });

  it('should remove an item from the cart', () => {
    addToCart(cartItem);
    const updatedCart = removeFromCart(cartItem);
    expect(updatedCart).toHaveLength(0);
  });

  it('should clear cart', () => {
    addToCart(cartItem);
    clearCart('user1');
    const cart = getCart('user1');
    expect(cart).toHaveLength(0);
  });
});
