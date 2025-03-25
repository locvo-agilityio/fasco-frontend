import Image from 'next/image';

// Components
import { SignUpForm } from '@/components';

//
import SignUpImage from '../../../public/assets/image-sign-up.webp';

const SignUp = () => (
  <div className="relative flex w-full h-full max-h-dvh md:max-h-[1080px] md:max-w-[1920px] flex-col items-center justify-center border rounded-r-3xl">
    <div className="flex w-full h-full">
      <div className="hidden relative md:block w-1/2 min-h-[500px]">
        <Image
          alt="Sign Up Image"
          src={SignUpImage}
          quality={100}
          fill
          sizes="50vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className="flex flex-col w-full h-full md:w-1/2 items-center justify-center">
        <div className="w-full max-w-[763px] md:p-10 p-5">
          <h1 className="text-[66px] font-volkhov">FASCO</h1>

          <SignUpForm />
        </div>

        <div className="flex w-full justify-end md:mt-20 mr-20 md:mb-5">
          <p className="font-poppins">FASCO Terms & Codnitions</p>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;
