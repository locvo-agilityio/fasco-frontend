import { MetadataRoute } from 'next';

// Constants
import { API_ENDPOINT, APP_URL, ROUTES } from '@/constants';

// Services
import { apiClient } from '@/services';

// Models
import { IProduct } from '@/models';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const lastModified = new Date();

  const staticRoutes = [
    {
      url: `${APP_URL}/${ROUTES.HOME}`,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${APP_URL}/${ROUTES.SHOP}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${APP_URL}/${ROUTES.CART}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    },
  ];

  try {
    const products = await apiClient.get<IProduct[]>(
      `${API_ENDPOINT}/products`,
    );
    const productRoutes = products.data.map((product) => ({
      url: `${APP_URL}/${ROUTES.PRODUCT_DETAIL(product.documentId)}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    }));

    return [...staticRoutes, ...productRoutes];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [...staticRoutes];
  }
};

export default sitemap;
