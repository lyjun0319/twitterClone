import { ReactNode } from 'react';
import * as style from '@/app/(afterLogin)/layout.css';
import Link from 'next/link';
import NavMenu from '@/app/(afterLogin)/_component/navMenu';
import LogoutButton from '@/app/(afterLogin)/_component/logoutButton';
import TrendSection from '@/app/(afterLogin)/_component/trendSection';
import FollowRecommend from '@/app/(afterLogin)/_component/followRecommend';

import ZLogo from '../../../public/zlogo.png';
import Image from 'next/image';
import RightSearchZone from '@/app/(afterLogin)/_component/rightSearchZone';

type Props = { children: ReactNode; modal: ReactNode };

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={ZLogo} alt="z.com로고" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
