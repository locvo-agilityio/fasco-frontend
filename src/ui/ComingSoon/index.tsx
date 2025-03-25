import Link from 'next/link';

// Constants
import { ROUTES } from '@/constants';

const ComingSoon = () => (
  <div className="flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold font-volkhov">Coming Soon</h1>

    <Link href={ROUTES.HOME}>
      <button className="w-72 border-1 rounded-sm px-4 py-2 border-primary-200 hover:bg-primary-50">
        Back to Home Page
      </button>
    </Link>
  </div>
);

export default ComingSoon;
