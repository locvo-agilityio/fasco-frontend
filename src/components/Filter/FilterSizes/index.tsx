'use client';

import { useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Utils
import { cn } from '@/utils';

// Components
import { Button } from '@/components/common';

// Constants
import { FILTER_SIZES } from '@/constants';

const FilterSizes = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | null>(
    searchParams.get('size') || null,
  );

  const handleSizeClick = useCallback(
    (value: string) => {
      const newSize = selectedSize === value ? null : value;
      const params = new URLSearchParams(searchParams);

      if (newSize) {
        params.set('size', newSize);
      } else {
        params.delete('size');
      }

      setSelectedSize(newSize);
      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace, selectedSize],
  );

  return (
    <div className="flex flex-col gap-4 mt-8">
      <p className="font-volkhov text-lg">Size</p>
      <div className="flex gap-2 max-w-[150px] flex-wrap">
        {FILTER_SIZES.map((size) => (
          <Button
            key={size}
            title={size}
            className={cn(
              'border transition-all w-10 h-10 min-w-10 bg-transparent rounded-base',
              selectedSize === size
                ? 'bg-blue-500 text-white'
                : 'bg-transparent hover:bg-gray-300 text-primary-200',
            )}
            variant="ghost"
            radius="sm"
            onPress={() => handleSizeClick(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterSizes;
