'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, CardFooter } from '@heroui/react';

// Components
import Rating from '@/components/Rating';

// Utils
import { formatNumber } from '@/utils';

// Constants
import { ROUTES } from '@/constants';

interface CardNewArrivalProps {
  id: string;
  img: string;
  title: string;
  price: number;
  brand: string;
  rating: number;
  reviews: number;
  quantity?: number;
}

const CardNewArrival = ({
  id,
  img,
  title,
  price,
  brand,
  rating,
  reviews,
  quantity = 0,
}: CardNewArrivalProps) => (
  <Card
    as={Link}
    href={ROUTES.PRODUCT_DETAIL(id)}
    shadow="sm"
    className="w-[386px] py-4 px-6 hover:shadow-2xl hover:cursor-pointer"
  >
    <CardBody className="flex items-center w-full h-60 rounded-regular">
      <Image
        alt={title}
        fill
        src={img}
        priority
        sizes="50vw"
        style={{ objectFit: 'cover' }}
      />
    </CardBody>
    <CardFooter className="w-full flex-col items-start text-small justify-between">
      <div className="w-full flex justify-between gap-2">
        <div>
          <b className="text-primary-200 font-poppins text-md">{title}</b>
          <p className="mt-1 text-gray-600 text-xs font-medium">{brand}</p>
        </div>
        <Rating rating={rating} />
      </div>

      <p className="mt-6 text-primary-200 font-medium">
        ({formatNumber(reviews)}) Customer Reviews
      </p>

      <div className="w-full mt-6 flex justify-between">
        <b className="text-primary-200 font-poppins text-3md">
          $ {formatNumber(price)}
        </b>
        {quantity === 0 && <p className="text-danger-600">Almost Sold Out</p>}
      </div>
    </CardFooter>
  </Card>
);

export default CardNewArrival;
