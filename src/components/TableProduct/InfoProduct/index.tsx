import { memo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/common';

interface InfoProductProps {
  image: string;
  name: string;
  color: string;
  onRemove?: () => void;
}

const InfoProduct = ({ image, name, color, onRemove }: InfoProductProps) => (
  <div className="flex w-[550px] flex-row gap-5">
    <div className="w-[366px] h-[225px] border overflow-hidden relative">
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
      <p className="font-poppins mt-4 text-2md text-gray-500">
        Color : {color}
      </p>

      <Button
        color="primary"
        size="md"
        variant="ghost"
        className="px-0 py-0 w-fit border-none data-[hover=true]:!bg-transparent text-primary-100 data-[hover=true]:!text-danger-200"
        onPress={onRemove}
      >
        <p className="underline text-gray-500">Remove</p>
      </Button>
    </div>
  </div>
);

export default memo(InfoProduct);
