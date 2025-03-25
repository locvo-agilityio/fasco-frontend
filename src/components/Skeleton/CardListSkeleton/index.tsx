'use client';

import CardSkeleton from '../CardSkeleton';

interface CardListSkeletonProps {
  isProduct?: boolean;
  length?: number;
}

const CardListSkeleton = ({
  length = 6,
  isProduct = false,
}: CardListSkeletonProps) => (
  <div className="flex container w-full flex-wrap items-start justify-start gap-12 mb-28">
    {Array.from({ length: length }).map((_, index) => (
      <CardSkeleton key={index} isProduct={isProduct} />
    ))}
  </div>
);

export default CardListSkeleton;
