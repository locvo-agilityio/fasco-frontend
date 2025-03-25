import { revalidateTag } from 'next/cache';

// Actions
import {
  getProductNewArrivals,
  getProducts,
  getProduct,
  checkoutCart,
  updateQuantityProduct,
} from '@/actions/product';

// Services
import { apiClient } from '@/services';

// Constants
import { API_ENDPOINT, QUERY, TAG_KEYS } from '@/constants';

// Utils
import { mergeProducts } from '@/utils';

jest.mock('@/services', () => ({
  apiClient: { get: jest.fn(), put: jest.fn() },
}));
jest.mock('next/cache', () => ({ revalidateTag: jest.fn() }));
jest.mock('@/utils', () => ({
  mergeProducts: jest.fn(),
  formatFilterPrices: jest.fn(),
}));

describe('Product Actions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getProductNewArrivals', () => {
    it('should fetch new arrivals', async () => {
      (apiClient.get as jest.Mock).mockResolvedValueOnce({ data: [] });
      const response = await getProductNewArrivals();
      expect(apiClient.get).toHaveBeenCalledWith(
        `${API_ENDPOINT.PRODUCTS}?${QUERY.NEW_ARRIVALS}`,
        { cache: 'force-cache' },
      );
      expect(response).toEqual({ data: [] });
    });
  });

  describe('getProducts', () => {
    it('should fetch products with search params', async () => {
      (apiClient.get as jest.Mock).mockResolvedValueOnce({
        data: [],
        meta: { pagination: {} },
      });
      const response = await getProducts({
        size: 'M',
        color: 'red',
        brand: 'Minimog',
        collection: 'best-seller',
        price: '1000-2000',
        page: 0,
        limit: 0,
      });
      expect(apiClient.get).toHaveBeenCalled();
      expect(response).toEqual({ data: [], meta: { pagination: {} } });
    });
  });

  describe('getProduct', () => {
    it('should fetch a single product', async () => {
      (apiClient.get as jest.Mock).mockResolvedValueOnce({
        data: { id: '1', name: 'Test Product' },
      });
      const response = await getProduct('1');
      expect(apiClient.get).toHaveBeenCalledWith(
        `${API_ENDPOINT.PRODUCTS}/1?populate=*`,
        {
          cache: 'force-cache',
          next: { tags: [TAG_KEYS.PRODUCT_BY_ID('1')] },
        },
      );
      expect(response).toEqual({ id: '1', name: 'Test Product' });
    });
  });

  describe('checkoutCart', () => {
    it('should check out cart items', async () => {
      (mergeProducts as jest.Mock).mockReturnValue([
        { productId: '1', quantity: 2 },
      ]);
      (apiClient.get as jest.Mock).mockResolvedValueOnce({
        data: { data: { quantity: 5 } },
      });
      const response = await checkoutCart([
        {
          productId: '1',
          quantity: 2,
          id: '',
          image: '',
          name: '',
          color: '',
          size: '',
          price: 0,
          totalQuantity: 0,
          total: 0,
        },
      ]);
      expect(mergeProducts).toHaveBeenCalled();
      expect(apiClient.get).toHaveBeenCalledWith(
        `${API_ENDPOINT.PRODUCTS}/1?populate=*`,
      );
      expect(response).toEqual([
        { productId: '1', quantity: 5, quantityCart: 2 },
      ]);
    });
  });

  describe('updateQuantityProduct', () => {
    it('should update product quantity and revalidate cache', async () => {
      await updateQuantityProduct('1', 10, 2);
      expect(apiClient.put).toHaveBeenCalledWith(`${API_ENDPOINT.PRODUCTS}/1`, {
        data: { quantity: 8 },
      });
      expect(revalidateTag).toHaveBeenCalledWith(TAG_KEYS.PRODUCT_BY_ID('1'));
    });
  });
});
