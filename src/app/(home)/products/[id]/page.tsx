import { Metadata, Viewport } from 'next';

// UI
import { ProductDetailWrapper } from '@/ui';

// Components
import { BannerCollection, BannerSubscribe } from '@/components';

// Constants
import { APP_URL, METADATA, ROUTES } from '@/constants';

interface ProductDetailPageProps {
  id: string;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<ProductDetailPageProps>;
}): Promise<Metadata> => {
  const { id } = await params;

  return {
    metadataBase: new URL(APP_URL),
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    keywords: METADATA.KEY_WORDS,
    openGraph: {
      type: 'website',
      url: `${APP_URL}/${ROUTES.PRODUCT_DETAIL(id)}`,
      title: METADATA.TITLE,
      description: METADATA.DESCRIPTION,
      siteName: METADATA.TITLE,
    },
    twitter: {
      title: METADATA.TITLE,
      description: METADATA.DESCRIPTION,
      card: 'summary',
    },
  };
};

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
