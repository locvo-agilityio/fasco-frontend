import { getProducts } from '@/actions';

// UI
import ProductListUI from '../ProductListUI';

// Types
import { ISearchParams } from '@/types';

interface IProductWrapperProps {
  searchParams: ISearchParams;
}

const ProductWrapper = async ({ searchParams }: IProductWrapperProps) => {
  const products = await getProducts(searchParams);

  return <ProductListUI products={products.data} />;
};

export default ProductWrapper;
