'use client';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Components
import { Button } from '@/components/common';

// Utils
import { cn } from '@/utils';

// Constants
import { FILTER_PRICES } from '@/constants';

const FilterPrices = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedPrice, setSelectedPrice] = useState<string | null>(
    searchParams.get('price') || null,
  );

  const handlePriceClick = (value: string) => {
    const newPrice = selectedPrice === value ? null : value;
    const params = new URLSearchParams(searchParams);

    if (newPrice) {
      params.set('price', newPrice);
    } else {
      params.delete('price');
    }

    setSelectedPrice(newPrice);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 mt-8">
      <p className="font-volkhov text-lg">Prices</p>
      <div className="flex max-w-[98px] flex-wrap">
        {FILTER_PRICES.map((price) => (
          <Button
            radius="none"
            key={price.value}
            className={cn(
              'flex justify-start border-none transition-all bg-transparent text-base font-poppins px-0 py-0',
              selectedPrice === price.value
                ? 'text-primary-500'
                : 'hover:text-primary-500 text-gray-500',
            )}
            onPress={() => handlePriceClick(price.value)}
          >
            {price.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterPrices;
