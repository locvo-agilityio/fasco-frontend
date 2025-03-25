import { MetadataRoute } from 'next';
import { BASE_URL } from '@/constants';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: ['/api/', '/sign-up/', '/sign-in/'],
  },
  sitemap: `${BASE_URL}/sitemap.xml`,
});

export default robots;
