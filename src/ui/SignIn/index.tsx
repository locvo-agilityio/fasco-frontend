import Image from 'next/image';

// Components
import { SignInForm } from '@/components';

// Image
import SignInImage from '../../../public/assets/image-sign-in.webp';

const SignIn = () => (
  <div className="relative flex w-full h-full max-w-[1920px] max-h-[1077px] flex-col items-center justify-center border rounded-r-3xl">
    <div className="flex w-full h-full">
      <div className="hidden relative md:block w-1/2 min-h-[500px]">
        <Image
          alt="Sign In Image"
          src={SignInImage}
          quality={100}
          fill
          sizes="50vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className="flex flex-col w-full h-full md:w-1/2 items-center justify-center">
        <div className="w-full max-w-[628px] p-10">
          <h1 className="text-[66px] font-volkhov">FASCO</h1>

          <SignInForm />
        </div>

        <div className="flex w-full justify-end md:mt-20 mr-20 mb-5">
          <p className="font-poppins">FASCO Terms & Codnitions</p>
        </div>
      </div>
    </div>
  </div>
);

export default SignIn;
