import './globals.scss';
import React from 'react';
import CopyrightComponent from '@/ui/components/copyright.component';
import { Metadata } from 'next';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Главная | FindIT',
  description: 'Первое кроссплатформенное приложение для предпринимателей',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className={`${inter.className}`}>
        {children}
        <CopyrightComponent />
      </body>
    </html>
  );
};
export default RootLayout;
