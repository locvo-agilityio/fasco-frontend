import { Star } from 'lucide-react';

// Utils
import { cn } from '@/utils';

interface IRatingProps {
  rating?: number;
  size?: number;
  color?: 'yellow' | 'black';
}

const Rating = ({ rating = 5, size = 19, color = 'yellow' }: IRatingProps) => {
  const isYellow = color === 'yellow';
  const fillColor = isYellow
    ? 'fill-yellow-500 text-yellow-500'
    : 'fill-black text-black';
  const strokeColor = isYellow
    ? 'stroke-yellow-500 text-white'
    : 'stroke-black text-white';

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          size={size}
          key={index}
          className={cn(index < rating ? fillColor : strokeColor)}
        />
      ))}
    </div>
  );
};

export default Rating;
