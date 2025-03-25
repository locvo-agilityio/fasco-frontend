'use client';

import Image from 'next/image';

// Components
import { Button, Input } from '@/components/common';

// Images
import SubscribeLeftImage from '../../../../public/assets/image-subscribe-left.webp';
import SubscribeRightImage from '../../../../public/assets/image-subscribe-right.webp';

const BannerSubscribe = () => (
  <div className="w-full h-full max-w-[1400px] max-h-[756px] flex flex-col md:flex-row gap-7 mt-20">
    <div className="max-w-[392px] w-full h-full">
      <div className="hidden relative md:block w-full min-h-[756px]">
        <Image
          alt="A male model is wearing beautiful clothes"
          src={SubscribeLeftImage}
          quality={100}
          fill
          sizes="50vw"
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>

    <div className="w-full h-[756px] flex flex-col items-center justify-center gap-2">
      <h3 className="text-4xl md:w-[631px] font-volkhov text-center mt-16 text-primary-200">
        Subscribe To Our Newsletter
      </h3>
      <p className="max-w-[614px] text-center text-gray-500 font-poppins mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin
      </p>

      <Input
        className="border-none shadow-2xl mt-7"
        classNames={{
          input: [
            'text-2md',
            'group-data-[has-value=true]:text-background-400',
            'placeholder:text-background-400',
            'px-5',
          ],
          inputWrapper: ['h-20', 'w-full max-w-[631px]'],
        }}
        placeholder="Enter your email address"
      />

      <Button className="max-w-52 h-14 mt-10">Subscribe Now</Button>
    </div>

    <div className="max-w-[392px] w-full h-full">
      <div className="hidden relative md:block w-full min-h-[756px]">
        <Image
          alt="A female model is wearing beautiful clothes"
          src={SubscribeRightImage}
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

export default BannerSubscribe;
