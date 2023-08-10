import React from 'react';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { DMSANS } from '@/public/assets/fonts';
import Layout from '@/components/UI/Layout';
import ThemeProvider from '@/context/ThemeProvider';

export const metadata: Metadata = {
  title: 'G-DataLabs',
  description: 'Unlocking Possibilities: The AI Tool for Seamless Innovation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={DMSANS.variable}>
      <body className="bg-main">
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
