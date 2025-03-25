import Image from 'next/image';

// Images
import InstagramImage from '../../../../public/assets/image-instagram.webp';

const BannerInstagram = () => (
  <div className="bg-gradient-white flex flex-col items-center justify-center w-full">
    <h3 className="text-4xl font-volkhov text-primary-200 text-center mt-16">
      Follow Us On Instagram
    </h3>
    <p className="max-w-[614px] text-center text-gray-500 font-poppins mt-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
      ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
    </p>

    <div className="relative w-full max-w-[1920px] h-[380px] mt-24">
      <Image
        alt="Sign In Image"
        src={InstagramImage}
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
  </div>
);

export default BannerInstagram;
