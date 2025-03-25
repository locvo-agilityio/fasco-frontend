'use client';

import { useEffect, useState } from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';

// Components
import { Button } from '@/components/common';

type NumberInputProps = {
  title?: string;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
};

const NumberInput = ({
  title = '',
  min = 1,
  max = 100,
  step = 1,
  onChange,
}: NumberInputProps) => {
  const [value, setValue] = useState<number>(min);

  const handleDecrease = () => {
    const newValue = value - step;

    setValue(newValue);
    onChange?.(newValue);
  };

  const handleIncrease = () => {
    const newValue = value + step;

    setValue(newValue);
    onChange?.(newValue);
  };

  useEffect(() => {
    setValue(min);
  }, [min]);

  return (
    <div className="flex flex-col gap-2 w-fit">
      {title && <p className="font-volkhov text-base">{title}</p>}
      <div className="flex w-32 h-12 items-center gap-2 border border-gray-300 rounded-base">
        <Button
          title="Decrease"
          onPress={handleDecrease}
          isDisabled={value === 1}
          className="w-11 h-12 min-w-11 px-0 py-0 bg-transparent hover:bg-gray-300 rounded-none border-none"
        >
          <MinusIcon size={9} className="text-black" />
        </Button>
        <span className="text-base font-normal font-jost w-10 text-center">
          {value}
        </span>
        <Button
          title="Increase"
          onPress={handleIncrease}
          isDisabled={value >= max}
          className="w-11 h-12 min-w-11 bg-transparent hover:bg-gray-300 rounded-none border-none"
        >
          <PlusIcon size={9} className="text-black" />
        </Button>
      </div>
    </div>
  );
};

export default NumberInput;
