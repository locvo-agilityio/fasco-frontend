'use client';

import { ComponentProps, memo } from 'react';
import { extendVariants, Button as ButtonNextUI } from '@heroui/react';

// Utils
import { cn } from '@/utils';

export const ButtonBase = extendVariants(ButtonNextUI, {
  variants: {
    variant: {
      bordered: 'border-1',
      ghost: 'bg-transparent data-[hover=true]:!border-none',
    },

    color: {
      default: 'bg-primary-300 text-foreground-100 disabled:opacity-50',
      primary:
        'text-secondary-400 border border-secondary-100 disabled:opacity-50',
    },

    size: {
      md: 'w-full py-5 text-base font-poppins',
      lg: 'w-full py-5 text-base font-poppins font-semibold',
    },
    radius: {
      none: 0,
      md: 'rounded-base',
      lg: 'rounded-regular',
      full: 'rounded-full',
    },
  },

  defaultVariants: {
    radius: 'md',
    variant: 'bordered',
    color: 'default',
    size: 'md',
  },
});

const Button = ({ className, ...props }: ComponentProps<typeof ButtonBase>) => (
  <ButtonBase
    className={cn('data-[pressed=true]:scale-[1] font-poppins', className)}
    {...props}
  />
);

export default memo(Button);
