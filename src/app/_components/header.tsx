import React from 'react';
import Link from 'next/link';
import Avatar from '@/app/_components/avatar';
import { globelBox, headerSt, logo, nav, navLink } from '@/app/_components/header.css';
import Image from 'next/image';
import logoImg from '/public/h2o_logo3.png';

const Header = () => {
  return (
    <header className={headerSt}>
      <h1 className={logo}>
        <Link href="/">
          <Image src={logoImg} alt="h2o" width={100} />
        </Link>
      </h1>
      <nav className={nav}>
        <Link href="/company" className={navLink}>
          고객사
        </Link>
        <Link href="/company" className={navLink}>
          결제
        </Link>
        <Link href="/company" className={navLink}>
          통계
        </Link>
        <Link href="/company" className={navLink}>
          고객사 회원
        </Link>
        <Link href="/company" className={navLink}>
          회원
        </Link>
        <Link href="/company" className={navLink}>
          로그
        </Link>
      </nav>
      <div className={globelBox}>
        <Avatar href={'aa'} size="small" />
      </div>
    </header>
  );
};

export default Header;
