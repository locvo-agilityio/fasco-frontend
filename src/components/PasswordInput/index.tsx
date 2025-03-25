'use client';

import { ComponentProps, memo, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

// Component
import { Button, Input } from '@/components/common';

// Utils
import { cn } from '@/utils';

const PasswordInput = ({
  isInvalid,
  ...rest
}: ComponentProps<typeof Input>) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <Input
      endContent={
        <Button
          title="toggle password visibility"
          color="primary"
          size="md"
          variant="ghost"
          aria-label="toggle password visibility"
          className="w-fit focus:outline-none border-none data-[hover=true]:!bg-transparent"
          type="button"
          onPress={toggleVisibility}
        >
          {isVisible ? (
            <Eye
              size={20}
              className={cn(
                'pointer-events-none',
                isInvalid ? 'text-danger-300' : 'text-default-400',
              )}
            />
          ) : (
            <EyeOff
              size={20}
              className={cn(
                'pointer-events-none',
                isInvalid ? 'text-danger-300' : 'text-default-400',
              )}
            />
          )}
        </Button>
      }
      type={isVisible ? 'text' : 'password'}
      isInvalid={isInvalid}
      {...rest}
    />
  );
};

export default memo(PasswordInput);
