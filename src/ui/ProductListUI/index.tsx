'use client';

import { Pagination } from '@heroui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Components
import { CardProduct } from '@/components';

// Models
import { IProduct } from '@/models';

// Types
import { IPagination } from '@/types';

interface ProductListUIProps {
  products: {
    data: IProduct[];
    meta: { pagination: IPagination };
  };
}

const ProductListUI = ({ products: { data, meta } }: ProductListUIProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePageClick = (page: number) => {
    const params = new URLSearchParams(searchParams);

    if (page) {
      params.set('page', String(page));
    } else {
      params.delete('page');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col items-center justify-between w-full mb-16">
      <div className="flex w-full flex-wrap items-start justify-start gap-12">
        {data.map(
          ({
            id,
            documentId,
            price,
            imageGalleries,
            name,
            colors,
            priceSale,
          }) => (
            <CardProduct
              id={documentId}
              key={id}
              img={imageGalleries[0].image}
              price={price}
              title={name}
              colors={colors || []}
              priceSale={priceSale}
            />
          ),
        )}
      </div>

      <Pagination
        variant="light"
        color="default"
        className="mt-12 font-jost text-base"
        radius="full"
        showControls
        initialPage={1}
        total={meta.pagination.pageCount}
        onChange={handlePageClick}
      />
    </div>
  );
};

export default ProductListUI;
