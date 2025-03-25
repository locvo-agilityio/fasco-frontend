'use client';

import { Spinner } from '@heroui/react';

const Loading = () => (
  <Spinner
    classNames={{ label: 'text-foreground mt-4' }}
    variant="dots"
    size="lg"
  />
);

export default Loading;
