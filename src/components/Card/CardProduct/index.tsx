'use client';

import { memo } from 'react';
import Image from 'next/image';
import { Card, CardBody, CardFooter, Chip } from '@heroui/react';
import Link from 'next/link';
import isEqual from 'react-fast-compare';

// Utils
import { formatNumber } from '@/utils';

// Constants
import { ROUTES } from '@/constants';

interface CardProductProps {
  id: string;
  img: string;
  title: string;
  price: number;
  priceSale?: number;
  colors?: { name: string; code: string }[];
}

const CardProduct = ({
  id,
  img,
  title,
  price,
  priceSale = 0,
  colors,
}: CardProductProps) => (
  <Card
    as={Link}
    href={ROUTES.PRODUCT_DETAIL(id)}
    shadow="none"
    className="w-[302px] rounded-none hover:shadow-2xl hover:cursor-pointer"
  >
    <CardBody className="flex items-center w-full h-80">
      <Image
        alt={title}
        fill
        src={img}
        priority
        sizes="50vw"
        style={{ objectFit: 'fill' }}
      />
    </CardBody>
    <CardFooter className="w-full p-5 flex-col items-start text-small justify-between">
      <div className="w-full flex flex-col justify-between gap-2">
        <b className="text-black font-volkhov text-base font-normal truncate">
          {title}
        </b>
        {priceSale ? (
          <div className="flex gap-2">
            <b className="text-black font-jost text-base font-normal">
              ${formatNumber(priceSale)}
            </b>
            <b className="text-gray-500 font-jost text-base font-normal line-through">
              ${formatNumber(price)}
            </b>
          </div>
        ) : (
          <b className="text-black font-jost text-base font-normal">
            ${formatNumber(price)}
          </b>
        )}
      </div>

      <div className="flex gap-2 mt-3">
        {colors?.map((color) => (
          <Chip
            key={color.code}
            className="p-0 w-6 h-6 min-w-6 border-2"
            style={{ backgroundColor: color.code }}
          />
        ))}
      </div>
    </CardFooter>
  </Card>
);

export default memo(CardProduct, isEqual);
