import type { Metadata } from 'next';
import './reset.css';
import './global.css';
import { MSWComponent } from '@/app/_components/MSWComponent';

export const metadata: Metadata = {
  title: 'Twitter',
  description: 'Twitter NextJS Clone',
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <MSWComponent />
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
