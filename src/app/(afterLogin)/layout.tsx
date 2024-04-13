import { ReactNode } from 'react';
import {
  mainContainer,
  header,
  contents,
  headerInner,
  contentInr,
  main,
  rightSection,
  logoLink,
  searchBox,
  headerFixed,
} from '@/app/(afterLogin)/layout.css';
import Link from 'next/link';
import NavLink from '@/app/(afterLogin)/_component/navLink';
import LogoutButton from '@/app/(afterLogin)/_component/logoutButton';
import TrendSection from '@/app/(afterLogin)/_component/trendSection';
import FollowRecommend from '@/app/(afterLogin)/_component/followRecommend';

export default function AfterLoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className={mainContainer}>
      <header className={header}>
        <section className={headerInner}>
          <div className={headerFixed}>
            <h1>
              <Link className={logoLink} href={'/'}>
                x코드
              </Link>
            </h1>
            <nav>
              <ul>
                <NavLink />
              </ul>
            </nav>
            <Link href={'/compose/tweet'}>Post</Link>
          </div>
          <LogoutButton />
        </section>
      </header>
      <div className={contents}>
        <div className={contentInr}>
          <div className={main}>{children}</div>
          <section className={rightSection}>
            <div className={searchBox}>
              <input type="search" />
              <button type="button">검색</button>
            </div>
            <TrendSection />
            <div>
              <h3>팔로우추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
