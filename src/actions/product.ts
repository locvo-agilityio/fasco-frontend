'use server';

import { revalidateTag } from 'next/cache';

// Services
import { apiClient } from '@/services';

// Constants
import { API_ENDPOINT, DEFAULT_PAGE, QUERY, TAG_KEYS } from '@/constants';

// Models
import { IProduct } from '@/models';

// Types
import { ICart, IPagination, ISearchParams } from '@/types';

// Utils
import { mergeProducts } from '@/utils';

export const getProductNewArrivals = async () => {
  const url = `${API_ENDPOINT.PRODUCTS}?${QUERY.NEW_ARRIVALS}`;

  return await apiClient.get<{ data: IProduct[] }>(url, {
    cache: 'force-cache', //Next.js 15 default is 'no-cache'
  });
};

export const getProducts = async (params: ISearchParams) => {
  const {
    size = '',
    color = '',
    collection = '',
    brand = '',
    price = '',
    page = DEFAULT_PAGE,
  } = params || {};

  const url = `${API_ENDPOINT.PRODUCTS}?${QUERY.PRODUCTS(
    size,
    color,
    brand,
    collection,
    price,
    page,
  )}`;

  return await apiClient.get<{
    data: IProduct[];
    meta: { pagination: IPagination };
  }>(url, {
    cache: 'force-cache', //Next.js 15 default is 'no-cache'
  });
};

export const getProduct = async (id: string) => {
  const url = `${API_ENDPOINT.PRODUCTS}/${id}?populate=*`;

  return (
    await apiClient.get<{ data: IProduct }>(url, {
      cache: 'force-cache',
      next: { tags: [TAG_KEYS.PRODUCT_BY_ID(id)] },
    })
  ).data;
};

export const checkoutCart = async (cart: ICart[]) => {
  const carts = mergeProducts(cart);

  return Promise.all(
    carts.map(async ({ productId, quantity: quantityCart }) => {
      const url = `${API_ENDPOINT.PRODUCTS}/${productId}?populate=*`;

      try {
        const product = (await apiClient.get<{ data: IProduct }>(url)).data;

        if (product) {
          const { quantity } = product.data;

          return { productId, quantity, quantityCart };
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return { productId, quantity: 0, quantityCart };
      }
    }),
  );
};

export const updateQuantityProduct = async (
  id: string,
  quantity: number,
  quantityCart: number,
) => {
  await apiClient.put<{ data: IProduct }>(`${API_ENDPOINT.PRODUCTS}/${id}`, {
    data: { quantity: quantity - quantityCart },
  });

  revalidateTag(TAG_KEYS.PRODUCT_BY_ID(id));
};
