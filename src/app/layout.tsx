'use client';

import Providers from '@/context';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#00a3deff]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
