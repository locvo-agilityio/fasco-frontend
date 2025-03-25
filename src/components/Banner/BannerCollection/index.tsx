'use client';

import Link from 'next/link';
import Image from 'next/image';

// Components
import { Button } from '@/components/common';

// Image
import CollectionImage from '../../../../public/assets/image-collection.webp';

// Constants
import { ROUTES } from '@/constants';

const BannerCollection = () => (
  <div className="relative flex w-full h-full max-h-[1077px] flex-col items-center justify-center bg-background-500">
    <div className="flex w-full h-full">
      <div className="hidden relative md:block w-1/2 h-full min-h-[570px]">
        <Image
          alt="Sign In Image"
          src={CollectionImage}
          quality={100}
          fill
          sizes="50vw"
          priority
        />
      </div>

      <div className="flex flex-col w-full h-full md:w-1/2 items-start justify-center">
        <div className="pt-14 px-14">
          <p className="font-poppins text-gray-700">Women Collection</p>

          <h2 className="text-4xl font-volkhov text-primary-200 mt-5">
            Peaky Blinders
          </h2>

          <p className="font-poppins underline mt-5">DESCRIPTION</p>

          <p className="font-poppins text-gray-600 max-w-[515px] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Scelerisque duis.
          </p>

          <div className="mt-5 flex items-center gap-4">
            Size:
            <div className="w-[53px] h-7 bg-black rounded-regular text-white text-center">
              M
            </div>
          </div>

          <p className="font-poppins text-black font-medium mt-5 text-4md">
            $100.00
          </p>

          <Button as={Link} href={ROUTES.SHOP} className="max-w-52 h-14 mt-10">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default BannerCollection;
