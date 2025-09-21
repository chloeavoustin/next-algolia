import React from 'react';
import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Next.js Algolia Store',
  description: 'PLP & PDP with Algolia + GTM',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <body className="font-sans text-gray-800">
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        {children}
      </body>
    </html>
  );
}
