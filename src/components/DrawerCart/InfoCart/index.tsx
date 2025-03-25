import { memo, useCallback } from 'react';
import Image from 'next/image';
import isEqual from 'react-fast-compare';

// Utils
import { formatNumber } from '@/utils';

// Components
import NumberInput from '@/components/NumberInput';

// Types
import { ICart } from '@/types';

interface InfoCartProps {
  productId: string;
  image: string;
  name: string;
  color: string;
  price: number;
  minQuantity: number;
  totalQuantity: number;
  onChangeQuantity: ({ productId, quantity }: ICart) => void;
}

const InfoCart = ({
  productId,
  image,
  name,
  color,
  price,
  minQuantity,
  totalQuantity,
  onChangeQuantity,
}: InfoCartProps) => {
  const handleQuantity = useCallback(
    (value: number) => {
      onChangeQuantity({ productId, quantity: value } as ICart);
    },
    [onChangeQuantity, productId],
  );

  return (
    <div className="flex flex-row gap-5 pb-5 border-b-1 border-primary-100">
      <div className="w-[168px] h-[225px] border overflow-hidden relative">
        <Image
          src={image}
          alt={`Product ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-volkhov text-2md">{name}</p>
        <p className="font-poppins text-2md text-primary-100">
          Color : {color}
        </p>
        <p className="font-poppins text-2md">${formatNumber(price)}</p>

        <div className="mt-2">
          <NumberInput
            min={minQuantity}
            max={totalQuantity}
            onChange={handleQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(InfoCart, isEqual);
