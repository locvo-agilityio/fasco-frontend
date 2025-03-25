'use client';

import { ChangeEvent, memo, useState } from 'react';
import { Radio, RadioGroup } from '@heroui/react';
import isEqual from 'react-fast-compare';

// Utils
import { cn } from '@/utils';

interface CheckboxColorProps {
  colors: { name: string; code: string }[];
  onFilterChange?: (selectedColor: string) => void;
}

const CheckboxColor = ({ colors, onFilterChange }: CheckboxColorProps) => {
  const [selectedColor, setSelectedColor] = useState<string>(colors[0].name);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;

    setSelectedColor(newColor);
    onFilterChange?.(newColor);
  };

  return (
    <div className="flex flex-col mt-8">
      <p className="font-volkhov text-base">
        Colors: {colors?.find((c) => c.name === selectedColor)?.name}
      </p>
      <RadioGroup
        value={selectedColor}
        onChange={handleRadioChange}
        orientation="horizontal"
      >
        {colors?.map((color) => (
          <label
            key={color.code}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Radio
              name="color"
              value={color.name}
              className="hidden"
              title={color.name}
            />
            <div
              className={cn(
                'w-9 h-9 rounded-full p-1 border-1 cursor-pointer transition-all',
                selectedColor === color.name
                  ? 'border-black'
                  : 'border-transparent',
              )}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ backgroundColor: color.code }}
              />
            </div>
          </label>
        ))}
      </RadioGroup>
    </div>
  );
};

export default memo(CheckboxColor, isEqual);
