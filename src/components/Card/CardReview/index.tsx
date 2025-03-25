'use client';

import Image, { StaticImageData } from 'next/image';
import { Card, CardBody, CardFooter } from '@heroui/react';

// Components
import Rating from '@/components/Rating';

interface CardReviewProps {
  title: string;
  rating: number;
  image: string | StaticImageData;
  customClass?: string;
  customImageClass?: string;
}

const CardReview = ({
  title,
  rating,
  image,
  customClass = '',
  customImageClass = '',
}: CardReviewProps) => (
  <Card shadow="sm" className={customClass}>
    <CardBody className={customImageClass}>
      <Image alt={title} fill src={image} priority sizes="50vw" />
    </CardBody>
    <CardFooter className="w-full h-full flex-col items-start justify-center">
      <p className="text-primary-200 font-poppins font-normal mb-7">
        &quot;You won&apos;t regret it. I would like to personally thank you for
        your outstanding product. Absolutely wonderful!&quot;
      </p>

      <div className="w-full max-w-[230px] pb-7 border-b-1 border-b-primary-200">
        <Rating rating={rating} />
      </div>

      <h4 className="text-2xl font-volkhov text-center mt-4">James K.</h4>

      <p className="mt-3 text-foreground-400 text-xs font-normal">Traveler</p>
    </CardFooter>
  </Card>
);

export default CardReview;
