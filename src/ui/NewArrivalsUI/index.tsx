'use client';

import { memo } from 'react';
import isEqual from 'react-fast-compare';
import Link from 'next/link';

// Components
import { CardNewArrival } from '@/components';
import { Button } from '@/components/common';

// Models
import { IProduct } from '@/models';

// Constants
import { ROUTES } from '@/constants';

interface NewArrivalsUIProps {
  products: { data: IProduct[] };
}

const NewArrivalsUI = ({ products }: NewArrivalsUIProps) => (
  <div className="container flex flex-col items-center justify-center w-full mb-36">
    <h3 className="text-4xl font-volkhov text-primary-200 text-center mt-16">
      New Arrivals
    </h3>
    <p className="max-w-[614px] text-center text-gray-600 font-poppins mt-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
      ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
    </p>

    <div className="flex w-full flex-wrap items-center justify-center gap-10 mt-16">
      {products.data.map(
        ({ id, brands, price, rating, imageGalleries, name, documentId }) => (
          <CardNewArrival
            id={documentId}
            img={imageGalleries[0].image}
            title={name}
            price={price}
            brand={brands}
            rating={rating}
            reviews={4100}
            key={id}
          />
        ),
      )}
    </div>

    <Button as={Link} href={ROUTES.SHOP} className="max-w-52 h-14 mt-12">
      View More
    </Button>
  </div>
);

export default memo(NewArrivalsUI, isEqual);
