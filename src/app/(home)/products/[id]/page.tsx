// UI
import { ProductDetailWrapper } from '@/ui';

// Components
import { BannerCollection, BannerSubscribe } from '@/components';

interface ProductDetailPageProps {
  id: string;
}

const ProductDetailPage = async ({
  params,
}: {
  params: Promise<ProductDetailPageProps>;
}) => {
  const { id } = await params;

  return (
    <main className="w-full flex flex-col items-center">
      <ProductDetailWrapper id={id} />

      <div className="mt-10 w-full flex flex-col items-center justify-center">
        <BannerCollection />
        <BannerSubscribe />
      </div>
    </main>
  );
};

export default ProductDetailPage;
