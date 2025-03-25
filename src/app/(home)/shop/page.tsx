// Components
import {
  BannerCollection,
  BannerInstagram,
  BannerSubscribe,
  Breadcrumbs,
  FilterBrands,
  FilterCollections,
  FilterColors,
  FilterPrices,
  FilterSizes,
} from '@/components';
import CardListSkeleton from '@/components/Skeleton/CardListSkeleton';

// Constants
import { BREADCRUMBS_SHOP } from '@/constants';

// Types
import { ISearchParams } from '@/types';

// UI
import { ProductWrapper } from '@/ui';
import { Suspense } from 'react';

const ShopPage = async ({
  searchParams,
}: {
  searchParams?: Promise<ISearchParams>;
}) => {
  const params = await searchParams; // Next.js 15 Change to Asynchronous

  return (
    <main className="w-full flex flex-col items-center">
      <div className="container px-6">
        <div className="flex flex-col items-center justify-center pb-16 gap-5">
          <h2 className="font-volkhov text-3xl">Fashion</h2>
          <Breadcrumbs breadcrumbs={BREADCRUMBS_SHOP} />
        </div>
        <div className="flex gap-10 mb-10">
          <div>
            <h4 className="font-volkhov text-xl">Filters</h4>
            <div className="flex flex-col gap-4">
              <FilterSizes />
              <FilterColors />
              <FilterPrices />
              <FilterBrands />
              <FilterCollections />
            </div>
          </div>

          <Suspense fallback={<CardListSkeleton length={9} isProduct={true} />}>
            <ProductWrapper searchParams={params as ISearchParams} />
          </Suspense>
        </div>
      </div>

      <BannerCollection />
      <BannerInstagram />
      <BannerSubscribe />
    </main>
  );
};

export default ShopPage;
