'use client';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Components
import { Button } from '@/components/common';

// Utils
import { cn } from '@/utils';

// Constants
import { FILTER_COLLECTIONS } from '@/constants';

const FilterCollections = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedCollection, setSelectedCollection] = useState<string | null>(
    searchParams.get('collection') || null,
  );

  const handleCollectionClick = (value: string) => {
    const newCollection = selectedCollection === value ? null : value;
    const params = new URLSearchParams(searchParams);

    if (newCollection) {
      params.set('collection', newCollection);
    } else {
      params.delete('collection');
    }

    setSelectedCollection(newCollection);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 mt-8">
      <p className="font-volkhov text-lg">Collections</p>
      <div className="flex flex-col gap-2 max-w-[244px]">
        {FILTER_COLLECTIONS.map((collection) => (
          <Button
            radius="none"
            key={collection.value}
            className={cn(
              'flex justify-start w-[98px] border-none transition-all bg-transparent text-base font-poppins px-0 py-0',
              selectedCollection === collection.value
                ? 'text-primary-500'
                : 'hover:text-primary-500 text-gray-500',
            )}
            onPress={() => handleCollectionClick(collection.value)}
          >
            {collection.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterCollections;
