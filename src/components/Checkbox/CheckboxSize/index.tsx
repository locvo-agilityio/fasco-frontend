'use client';

import { ChangeEvent, memo, useState } from 'react';
import { Radio, RadioGroup } from '@heroui/react';
import isEqual from 'react-fast-compare';

// Utils
import { cn } from '@/utils';

interface CheckboxSizeProps {
  sizes: { id: number; size: string }[];
  onFilterChange?: (selectedSize: string) => void;
}

const CheckboxSize = ({ sizes, onFilterChange }: CheckboxSizeProps) => {
  const [selectedSize, setSelectedSize] = useState<string>(sizes?.[0].size);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSize = event.target.value;

    setSelectedSize(newSize);
    onFilterChange?.(newSize);
  };

  return (
    <div className="flex flex-col gap-2 mt-8">
      <p className="font-volkhov text-base">
        Sizes: {sizes?.find((c) => c.size === selectedSize)?.size}
      </p>
      <RadioGroup
        value={selectedSize}
        onChange={handleRadioChange}
        orientation="horizontal"
      >
        {sizes?.map(({ id, size }) => (
          <label key={id} className="flex items-center gap-2 cursor-pointer">
            <Radio name="color" value={size} className="hidden" title={size} />
            <div
              className={cn(
                'w-9 h-9 rounded-base p-1 font-poppins border-1 cursor-pointer transition-all text-center',
                selectedSize === size ? 'bg-black text-white' : 'border-black',
              )}
            >
              {size}
            </div>
          </label>
        ))}
      </RadioGroup>
    </div>
  );
};

export default memo(CheckboxSize, isEqual);
