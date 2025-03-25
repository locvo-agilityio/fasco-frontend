import { ICart } from '@/types';

export const addToCart = (cart: ICart): ICart[] => {
  const carts: Record<string, ICart[]> = JSON.parse(
    localStorage.getItem('carts') || '{} ',
  );

  if (!carts[cart.id]) {
    carts[cart.id] = [];
  }

  const {
    productId,
    color,
    size,
    image,
    quantity,
    name,
    price,
    priceSale,
    totalQuantity,
    id,
  } = cart;
  const existingProduct = carts[cart.id].find(
    (item) =>
      item.productId === cart.productId &&
      item.color === color &&
      item.size === size,
  );

  if (existingProduct) {
    existingProduct.quantity += quantity;
    existingProduct.total =
      existingProduct.quantity *
      (existingProduct.priceSale || existingProduct.price);
  } else {
    carts[cart.id].push({
      productId: productId,
      name: name,
      color: color,
      size: size,
      price: priceSale || price,
      image: image,
      totalQuantity: totalQuantity,
      quantity: quantity,
      total: quantity * (priceSale || price),
      id: id,
    });
  }

  localStorage.setItem('carts', JSON.stringify(carts));

  return carts[cart.id];
};

export const getCart = (cartId: string): ICart[] => {
  const carts: Record<string, ICart[]> = JSON.parse(
    localStorage.getItem('carts') || '{}',
  );

  return carts[cartId] || [];
};

export const updateQuantity = ({ id, quantity, productId }: ICart): ICart[] => {
  const carts: Record<string, ICart[]> = JSON.parse(
    localStorage.getItem('carts') || '{} ',
  );

  const product = carts[id]?.find(
    (item: { productId: string }) => item.productId === productId,
  );

  if (product) {
    product.quantity = quantity;
    product.total = quantity * (product.priceSale || product.price);
  }

  localStorage.setItem('carts', JSON.stringify(carts));
  return carts[id];
};

export const clearCart = (cartId: string) => {
  const carts: Record<string, ICart[]> = JSON.parse(
    localStorage.getItem('carts') || '{}',
  );

  delete carts[cartId];

  localStorage.setItem('carts', JSON.stringify(carts));
};

export const removeFromCart = ({
  id,
  productId,
  color,
  size,
}: ICart): ICart[] => {
  const carts: Record<string, ICart[]> = JSON.parse(
    localStorage.getItem('carts') || '{}',
  );

  if (carts[id]) {
    carts[id] = carts[id].filter(
      (item) =>
        !(
          item.productId === productId &&
          item.color === color &&
          item.size === size
        ),
    );
  }

  localStorage.setItem('carts', JSON.stringify(carts));

  return carts[id];
};
