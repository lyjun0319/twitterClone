'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { navLink, navActive } from '@/app/(afterLogin)/layout.css';

export default function NavLink(): React.ReactNode {
  const sagment = useSelectedLayoutSegment();
  return (
    <>
      <li>
        <Link href={'/home'} className={sagment === 'home' ? `${navLink} ${navActive}` : navLink}>
          <div>Home</div>
        </Link>
      </li>
      <li>
        <Link
          href={'/explore'}
          className={sagment === 'explore' ? `${navLink} ${navActive}` : navLink}
        >
          Explore
        </Link>
      </li>
      <li>
        <Link
          href={'/message'}
          className={sagment === 'message' ? `${navLink} ${navActive}` : navLink}
        >
          Messages
        </Link>
      </li>
      <li>
        <Link
          href={'/profile'}
          className={sagment === 'profile' ? `${navLink} ${navActive}` : navLink}
        >
          Profile
        </Link>
      </li>
    </>
  );
}
