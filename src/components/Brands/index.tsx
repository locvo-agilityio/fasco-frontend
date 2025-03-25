import Image from 'next/image';
import { useMemo } from 'react';

// Constants
import { BRANDS } from '@/constants';

const Brands = () => {
  const renderBrands = useMemo(
    () =>
      BRANDS.map((brand) => (
        <div key={brand.name} className="w-44 h-7">
          <div className="relative w-full h-full">
            <Image
              fill
              src={brand.image.src}
              alt={brand.name}
              key={brand.name}
              sizes="50vw"
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )),
    [],
  );

  return (
    <div className="flex w-full justify-between py-20">{renderBrands}</div>
  );
};
export default Brands;
