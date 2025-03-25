'use client';

import { ReactNode } from 'react';
import { HeroUIProvider } from '@heroui/system';
import { ToastProvider } from '@heroui/react';

export interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <HeroUIProvider>
    <ToastProvider toastProps={{ timeout: 3000 }} placement="top-right" />
    {children}
  </HeroUIProvider>
);

export default Providers;
