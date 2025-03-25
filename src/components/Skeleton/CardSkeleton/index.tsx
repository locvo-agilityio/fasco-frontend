import { cn } from '@/utils';
import { Card, Skeleton } from '@heroui/react';

interface CardSkeletonProps {
  isProduct?: boolean;
}

const CardSkeleton = ({ isProduct = false }: CardSkeletonProps) => (
  <Card
    className={cn(' h-96 space-y-5 p-4', isProduct ? 'w-[302px]' : 'w-[386px]')}
  >
    <Skeleton className="rounded-lg">
      <div className="h-80 rounded-lg bg-default-300" />
    </Skeleton>
    <div className="space-y-3">
      <Skeleton className="w-3/5 rounded-lg">
        <div className="h-3 w-3/5 rounded-lg bg-default-200" />
      </Skeleton>
      <Skeleton className="w-4/5 rounded-lg">
        <div className="h-3 w-4/5 rounded-lg bg-default-200" />
      </Skeleton>
      <Skeleton className="w-2/5 rounded-lg">
        <div className="h-3 w-2/5 rounded-lg bg-default-300" />
      </Skeleton>
    </div>
  </Card>
);

export default CardSkeleton;
