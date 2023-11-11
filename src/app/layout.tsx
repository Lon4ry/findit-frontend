import React from 'react';
import './globals.css';
import { Metadata } from 'next';
import CopyrightComponent from '@/ui/components/copyright.component';

export const metadata: Metadata = {
  title: 'FindIT',
  description: 'Первое кроссплатформенное приложение для предпринимателей',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className={'h-full w-full'}>
        {children}
        <CopyrightComponent />
      </body>
    </html>
  );
};
export default RootLayout;
