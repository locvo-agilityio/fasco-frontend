'use client';

import { useState } from 'react';
import { addToast, Progress } from '@heroui/react';
import { EyeIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Components
import {
  CheckboxColor,
  CheckboxSize,
  ImageGallery,
  NumberInput,
  Rating,
} from '@/components';
import { Button } from '@/components/common';

// Context
import { useCart } from '@/contexts';

// Constants
import { ROUTES, SUCCESS_MESSAGES, ToastType } from '@/constants';

// Utils
import { formatNumber } from '@/utils';

interface ProductDetailUIProps {
  userId?: string;
  productId: string;
  imageGallery: { id: number; image: string }[];
  name: string;
  rating: number;
  price: number;
  quantity?: number;
  priceSale?: number;
  colors: { name: string; code: string }[];
  sizes: { id: number; size: string }[];
}

const ProductDetailUI = ({
  userId,
  productId,
  imageGallery,
  name,
  rating,
  price,
  priceSale,
  colors,
  sizes,
  quantity,
}: ProductDetailUIProps) => {
  const router = useRouter();
  const [color, setColor] = useState<string | null>(colors?.[0]?.name || null);
  const [size, setSize] = useState<string | null>(sizes?.[0]?.size || null);
  const [quantityProduct, setQuantity] = useState<number>(1);
  const { addCart } = useCart();

  const handleChangeColor = (color: string | null) => {
    setColor(color);
  };

  const handleChangeSize = (size: string | null) => {
    setSize(size);
  };

  const handleChangeQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const handleAddToCart = () => {
    if (userId) {
      addCart({
        id: userId,
        productId: productId,
        name: name,
        color: String(color),
        size: String(size),
        image: imageGallery[0].image,
        quantity: Number(quantityProduct),
        priceSale: priceSale,
        price: price,
        totalQuantity: quantity || 0,
        total: Number(quantityProduct) * price,
      });

      addToast({
        description: SUCCESS_MESSAGES.ADD_CART_SUCCESS,
        color: ToastType.SUCCESS,
      });
    } else {
      router.push(ROUTES.LOGIN);
    }
  };

  return (
    <div className="container flex px-6 gap-20">
      <ImageGallery images={imageGallery} />

      <div className="w-full flex flex-col gap-7">
        <div>
          <p className="font-volkhov text-gray-500 font-normal text-sm">
            FASCO
          </p>
          <p className="font-volkhov text-xl">{name}</p>
          <div className="flex items-center gap-3">
            <Rating color="black" rating={rating} size={15} />{' '}
            <span className="font-jost text-sm">({rating})</span>
          </div>
        </div>

        {priceSale ? (
          <div className="flex items-center gap-2">
            <b className="text-black font-volkhov text-3md font-normal">
              ${formatNumber(priceSale)}
            </b>
            <b className="text-gray-400 font-jost text-base font-normal line-through">
              ${formatNumber(price)}
            </b>
          </div>
        ) : (
          <b className="text-black font-volkhov text-3md font-normal">
            ${formatNumber(price)}
          </b>
        )}

        <div className="flex items-center gap-2">
          <EyeIcon size={20} />{' '}
          <span className="font-poppins text-base text-gray-500">
            24 people are viewing this right now
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-jost text-gray-600">
            Only <span className="font-bold">{quantity}</span> item(s) left in
            stock!
          </p>
          <Progress
            aria-label="Quantity"
            size="sm"
            value={quantity}
            color="danger"
            maxValue={100}
            minValue={0}
          />
        </div>

        <CheckboxSize sizes={sizes} onFilterChange={handleChangeSize} />
        <CheckboxColor colors={colors} onFilterChange={handleChangeColor} />

        <div className="flex items-end gap-7">
          <div className="mt-8">
            <NumberInput
              title="Quantity"
              min={1}
              max={quantity}
              onChange={handleChangeQuantity}
            />
          </div>

          <Button
            color="primary"
            variant="ghost"
            size="lg"
            className="text-foreground-500 border-primary-300 rounded-md font-volkhov font-normal"
            onPress={handleAddToCart}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailUI;
