'use client';

import Image from 'next/image';
import Link from 'next/link';

// Import
import PersonRightImage from '../../../public/assets/image-person-right.webp';
import PersonLeftImage from '../../../public/assets/image-person-left.webp';
import PeopleTopImage from '../../../public/assets/image-people-top.webp';
import PeopleBottomImage from '../../../public/assets/image-people-bot.webp';

// Component
import { Button } from '@/components/common';

// Constants
import { ROUTES } from '@/constants';

const Poster = () => (
  <div className="w-full h-full max-h-[756px] flex flex-col md:flex-row gap-9">
    <div className="max-w-[392px] w-full h-full bg-gray-300 rounded-regular">
      <div className="hidden relative md:block w-full min-h-[756px]">
        <Image
          alt="Fashion model seated, showcasing a stylish outfit"
          src={PersonLeftImage}
          quality={100}
          fill
          sizes="50vw"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>

    <div className="w-full h-[756px] flex flex-col items-center justify-between gap-2">
      <div className="max-h-[150px] w-full h-full bg-gray-300 rounded-regular">
        <div className="relative w-full min-h-[150px]">
          <Image
            alt="Fashion Quartet"
            src={PeopleTopImage}
            quality={100}
            fill
            sizes="50vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="md:text-5xl text-[80px] leading-[91px] font-poppins font-medium text-primary-200">
          ULTIMATE
        </p>
        <p
          className="md:text-6xl text-9xl leading-[187px] font-poppins font-medium text-transparent"
          style={{ WebkitTextStroke: '2px #484848' }}
        >
          SALE
        </p>

        <p className="text-md font-poppins text-primary-200">NEW COLLECTION</p>

        <Button
          as={Link}
          href={ROUTES.SHOP}
          size="md"
          radius="lg"
          className="w-52 h-14"
        >
          SHOP NOW
        </Button>
      </div>
      <div className="max-h-[150px] w-full h-full">
        <div className="relative w-full min-h-[150px]">
          <Image
            alt="Sparkling Duo"
            src={PeopleBottomImage}
            quality={100}
            fill
            sizes="50vw"
            style={{ objectFit: 'cover' }}
            priority
            className="rounded-regular"
          />
        </div>
      </div>
    </div>

    <div className="max-w-[392px] w-full h-full bg-gray-300 rounded-regular">
      <div className="hidden relative md:block w-full min-h-[756px]">
        <Image
          alt="Fashion model seated, showcasing a stylish outfit"
          src={PersonRightImage}
          quality={100}
          fill
          sizes="50vw"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  </div>
);

export default Poster;
