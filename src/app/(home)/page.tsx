import {
  BannerCollection,
  BannerInstagram,
  BannerSubscribe,
  Brands,
  CustomerSay,
  Poster,
} from '@/components';
import CardListSkeleton from '@/components/Skeleton/CardListSkeleton';
import { NewArrivals } from '@/ui';
import { Suspense } from 'react';

const Homepage = () => (
  <main className="w-full flex flex-col items-center justify-center">
    <div className="container">
      <Poster />
      <Brands />
    </div>

    <Suspense fallback={<CardListSkeleton />}>
      <NewArrivals />
    </Suspense>

    <BannerCollection />
    <BannerInstagram />
    <CustomerSay />
    <BannerSubscribe />
  </main>
);

export default Homepage;
