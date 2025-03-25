import { notFound } from 'next/navigation';

// Actions
import { getProduct } from '@/actions';

// UI
import ProductDetailUI from '../ProductDetailUI';

// Auth
import { auth } from '@/auth';

interface IProductDetailWrapperProps {
  id: string;
}

const ProductDetailWrapper = async ({ id }: IProductDetailWrapperProps) => {
  const product = await getProduct(id);
  const authData = await auth();
  const userId = authData?.user.documentId || authData?.user.email || '';

  const {
    imageGalleries,
    name,
    rating,
    price,
    priceSale,
    quantity,
    colors,
    sizes,
    documentId,
  } = product.data;

  if (!product.data) return notFound();

  return (
    <ProductDetailUI
      productId={documentId}
      userId={userId}
      imageGallery={imageGalleries}
      name={name}
      rating={rating}
      price={price}
      quantity={quantity}
      priceSale={priceSale}
      colors={colors}
      sizes={sizes}
    />
  );
};

export default ProductDetailWrapper;
