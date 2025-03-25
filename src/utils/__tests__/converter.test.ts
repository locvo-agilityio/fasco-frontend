import { ICart } from '@/types';
import {
  formatNumber,
  formatFilterPrices,
  totalPrice,
  mergeProducts,
} from '@/utils';

describe('Utility Functions', () => {
  describe('formatNumber', () => {
    it('should format numbers less than 1000 with two decimal places', () => {
      expect(formatNumber(123.456)).toBe('123.46');
    });

    it('should format numbers greater than or equal to 1000 with "k" suffix', () => {
      expect(formatNumber(1500)).toBe('1.5k');
      expect(formatNumber(2000)).toBe('2k');
    });

    it('should remove trailing ".0" from numbers with "k" suffix', () => {
      expect(formatNumber(3000)).toBe('3k');
    });
  });

  describe('formatFilterPrices', () => {
    it('should return the correct query string for a valid price range', () => {
      expect(formatFilterPrices('0-50')).toBe(
        'filters[price][$gte]=0&filters[price][$lte]=50',
      );
      expect(formatFilterPrices('50-100')).toBe(
        'filters[price][$gte]=50&filters[price][$lte]=100',
      );
    });

    it('should return an empty string for an invalid price range', () => {
      expect(formatFilterPrices('999-999')).toBe('');
    });
  });

  describe('totalPrice', () => {
    it('should calculate the total price of items in the cart', () => {
      const cart: ICart[] = [
        {
          total: 100,
          productId: '',
          id: '',
          image: '',
          name: '',
          color: '',
          size: '',
          price: 0,
          totalQuantity: 0,
          quantity: 0,
        },
        {
          total: 200,
          productId: '',
          id: '',
          image: '',
          name: '',
          color: '',
          size: '',
          price: 0,
          totalQuantity: 0,
          quantity: 0,
        },
        {
          total: 50,
          productId: '',
          id: '',
          image: '',
          name: '',
          color: '',
          size: '',
          price: 0,
          totalQuantity: 0,
          quantity: 0,
        },
      ];
      expect(totalPrice(cart)).toBe(350);
    });

    it('should return 0 for an empty cart', () => {
      expect(totalPrice([])).toBe(0);
    });

    it('should handle undefined or null carts gracefully', () => {
      expect(totalPrice([])).toBe(0);
    });
  });

  describe('mergeProducts', () => {
    it('should merge products with the same productId and sum their quantities', () => {
      const products: ICart[] = [
        {
          productId: 'p1',
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
        {
          productId: 'p2',
          quantity: 1,
          id: '',
          image: '',
          name: '',
          color: '',
          size: '',
          price: 0,
          totalQuantity: 0,
          total: 0,
        },
        {
          productId: 'p1',
          quantity: 3,
          id: '',
          image: '',
          name: '',
          color: '',
          size: '',
          price: 0,
          totalQuantity: 0,
          total: 0,
        },
      ];

      expect(mergeProducts(products)).toEqual([
        { productId: 'p1', quantity: 5 },
        { productId: 'p2', quantity: 1 },
      ]);
    });

    it('should handle an empty array of products', () => {
      expect(mergeProducts([])).toEqual([]);
    });

    it('should return a single product if only one product exists in the input', () => {
      const products: ICart[] = [
        {
          productId: 'p1',
          quantity: 4,
          id: '',
          image: '',
          name: '',
          color: '',
          size: '',
          price: 0,
          totalQuantity: 0,
          total: 0,
        },
      ];
      expect(mergeProducts(products)).toEqual([
        { productId: 'p1', quantity: 4 },
      ]);
    });
  });
});
