import { ICart } from '@/types';

export const formatNumber = (value: number): string =>
  value < 1000
    ? value.toFixed(2)
    : (value / 1000).toFixed(1).replace('.0', '') + 'k';

export const formatFilterPrices = (value: string) => {
  const priceRanges: Record<string, [number, number]> = {
    '0-50': [0, 50],
    '50-100': [50, 100],
    '100-150': [100, 150],
    '150-200': [150, 200],
    '300-400': [300, 400],
  };

  const range = priceRanges[value];
  return range
    ? `filters[price][$gte]=${range[0]}&filters[price][$lte]=${range[1]}`
    : '';
};

export const totalPrice = (cart: ICart[]) =>
  cart?.reduce((acc, item) => acc + item.total, 0);

export const mergeProducts = (products: ICart[]) =>
  Object.values(
    products.reduce(
      (acc, product) => {
        if (!acc[product.productId]) {
          acc[product.productId] = {
            productId: product.productId,
            quantity: 0,
          };
        }
        acc[product.productId].quantity += product.quantity;
        return acc;
      },
      {} as Record<string, { productId: string; quantity: number }>,
    ),
  );
