'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/utils';

interface ImageGalleryProps {
  images: { id: number; image: string }[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0].image);

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
      <div className="flex md:flex-col gap-6">
        {images.map(({ id, image }) => {
          const isSelectImage =
            selectedImage === image ? 'border-2 border-blue-500' : '';

          return (
            <div
              key={id}
              className={cn(
                'w-14 h-[77px] border overflow-hidden cursor-pointer relative',
                isSelectImage,
              )}
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${id}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          );
        })}
      </div>

      <div className="w-[491px] h-[654px] border overflow-hidden relative">
        <Image
          src={selectedImage}
          alt="Selected"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
