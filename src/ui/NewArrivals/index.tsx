import { getProductNewArrivals } from '@/actions';
import NewArrivalsUI from '../NewArrivalsUI';

const NewArrivals = async () => {
  const products = await getProductNewArrivals();

  return <NewArrivalsUI products={products.data} />;
};

export default NewArrivals;
