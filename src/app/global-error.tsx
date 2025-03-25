'use client';

import Image from 'next/image';
import { useEffect } from 'react';

// Components
import { Button } from '@/components/common';

// Images
import ErrorImage from '../../public/assets/image-error.webp';

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-[177px] sm:mt-14 lg:mt-52 mb-7.5">
      <div className="w-[300px] flex items-center justify-center">
        <Image src={ErrorImage} alt="Error Image" />
      </div>
      <p className="text-md font-volkhov text-dark-100 text-center m-10">
        The page you were trying to reach is currently unavailable.
      </p>
      <Button
        className="w-56 text-white border-1 rounded-sm h-11 bg-red-700"
        onClick={reset}
      >
        Try again
      </Button>
    </div>
  );
};

export default GlobalError;
