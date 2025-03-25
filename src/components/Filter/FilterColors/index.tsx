'use client';

import { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Utils
import { cn } from '@/utils';

// Components
import { Button } from '@/components/common';

// Constants
import { FILTER_COLORS } from '@/constants';

const FilterColors = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selectedColor, setSelectedColor] = useState<string | null>(
    decodeURIComponent(String(searchParams.get('color'))),
  );

  const handleColorClick = (color: string) => {
    const newColor = selectedColor === color ? null : color;

    const params = new URLSearchParams(searchParams);

    if (newColor) {
      params.set('color', encodeURIComponent(newColor));
    } else {
      params.delete('color');
    }

    setSelectedColor(newColor);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 mt-8">
      <p className="font-volkhov text-lg">Colors</p>
      <div className="flex gap-2 max-w-[244px] flex-wrap">
        {FILTER_COLORS.map((color) => (
          <Button
            title={color.name}
            key={color.code}
            radius="full"
            className={cn(
              'w-7 h-7 min-w-7 border-3 transition-all px-0 py-0',
              selectedColor === color.code
                ? 'border-primary-500'
                : 'border-transparent',
            )}
            style={{ backgroundColor: color.code }}
            onPress={() => handleColorClick(color.code)}
            variant="ghost"
            color="primary"
          />
        ))}
      </div>
    </div>
  );
};

export default FilterColors;
