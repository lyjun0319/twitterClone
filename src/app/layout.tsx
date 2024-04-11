import type { Metadata } from 'next';
import './reset.css';
import './global.css';
import { Inter } from 'next/font/google';
import Header from '@/app/_components/header';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Twitter',
  description: 'Twitter NextJS Clone',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
