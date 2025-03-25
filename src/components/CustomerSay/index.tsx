'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

// Components
import { Button } from '@/components/common';
import CardReview from '../Card/CardReview';

// Images
import ImageReviewMiddle from '../../../public/assets/image-review-middle.webp';
import ImageReviewSecondary from '../../../public/assets/image-review-secondary.webp';

const CustomerSay = () => (
  <div className="hidden relative md:flex w-full pb-12 flex-col items-center justify-center bg-background-200 overflow-hidden">
    <h3 className="text-4xl font-volkhov text-center mt-24">
      This Is What Our Customers Say
    </h3>

    <p className="max-w-[614px] text-center text-gray-600 font-poppins mt-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
    </p>

    <div className="relative z-20 mt-16">
      <CardReview
        customClass="w-[840px] h-[400px] py-4 px-12 flex flex-row items-center gap-20 border-none"
        customImageClass="flex items-center w-[480px] h-[263px] rounded-regular"
        title="James K."
        rating={5}
        image={ImageReviewMiddle}
      />
    </div>

    <div className="absolute z-10 top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/3 flex gap-56 opacity-80 scale-90">
      <CardReview
        customClass="w-[646px] h-[300px] py-10 px-12 flex flex-row items-center gap-4 border-none"
        customImageClass="flex items-center w-[377px] h-[193px] rounded-regular"
        title="James K."
        rating={5}
        image={ImageReviewSecondary}
      />

      <CardReview
        customClass="w-[646px] h-[300px] py-10 px-12 flex flex-row items-center gap-4 border-none"
        customImageClass="flex items-center w-[377px] h-[193px] rounded-regular"
        title="James K."
        rating={5}
        image={ImageReviewSecondary}
      />
    </div>

    <div className="flex gap-4 mt-12">
      <Button
        title="Prev Button"
        variant="ghost"
        color="primary"
        radius="full"
        className="w-12 h-12 min-w-12 border-none bg-white shadow-2xl disabled:cursor-not-allowed"
        disabled
      >
        <ChevronLeft className="text-primary-200" />
      </Button>
      <Button
        title="Next Button"
        variant="ghost"
        color="primary"
        radius="full"
        className="w-12 h-12 min-w-12 border-none bg-white shadow-2xl"
      >
        <ChevronRight className="text-primary-200" />
      </Button>
    </div>
  </div>
);

export default CustomerSay;
