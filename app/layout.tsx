import { auth } from '@/auth';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang='en'>
      <SessionProvider session={session}>
        <body className={inter.className}>
          <div className='container'>
            <Navbar />
            {children}
          </div>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
