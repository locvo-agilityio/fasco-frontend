import { formatFilterPrices } from '@/utils';

export const QUERY = {
  NEW_ARRIVALS:
    'filters[collections][$eq]=new-arrivals&pagination[page]=1&pagination[pageSize]=6&sort[0]=createdAt:desc',
  PRODUCTS: (
    size: string,
    color: string,
    brand: string,
    collection: string,
    price: string,
    page: number,
  ) =>
    `populate=*${size && `&filters[sizes][size][$eq]=${size}`}${
      color && `&filters[colors][code][$eq]=${color}`
    }${brand && `&filters[brands][$eq]=${brand}`}${
      collection && `&filters[collections][$eq]=${collection}`
    }${price && `&${formatFilterPrices(price)}`}&pagination[page]=${page}&pagination[pageSize]=9`,
};
