'use client';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Components
import { Button } from '@/components/common';

// Utils
import { cn } from '@/utils';

// Constants
import { FILTER_BRANDS } from '@/constants';

const FilterBrands = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    searchParams.get('brand') || null,
  );

  const handleBrandClick = (value: string) => {
    const newBrand = selectedBrand === value ? null : value;
    const params = new URLSearchParams(searchParams);

    if (newBrand) {
      params.set('brand', newBrand);
    } else {
      params.delete('brand');
    }

    setSelectedBrand(newBrand);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 mt-8">
      <p className="font-volkhov text-lg">Brands</p>
      <div className="flex flex-row items-start gap-1 max-w-[394px] flex-wrap">
        {FILTER_BRANDS.map((brand) => (
          <Button
            radius="none"
            key={brand.value}
            className={cn(
              'flex justify-start w-full max-w-24 border-none w- transition-all bg-transparent text-base font-poppins px-0 py-0',
              selectedBrand === brand.value
                ? 'text-primary-500'
                : 'hover:text-primary-500 text-gray-500',
            )}
            onPress={() => handleBrandClick(brand.value)}
          >
            {brand.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterBrands;
