import React from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Next.js Algolia Store',
  description: 'PLP & PDP with Algolia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-sans text-gray-800'>{children}</body>
    </html>
  );
}
