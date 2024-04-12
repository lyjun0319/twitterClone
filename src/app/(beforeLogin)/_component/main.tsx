import zLogo from '../../../../public/zlogo.png';
import { container, left, login, right, signUp, textH1, textH2, textH3 } from '@/app/main.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
  return (
    <div className={container}>
      <div className={left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={right}>
        <h1 className={textH1}>지금 일어나고 있는 일</h1>
        <h2 className={textH2}>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={signUp}>
          계정 만들기
        </Link>
        <h3 className={textH3}>이미 트위터에 가입하셨나요?</h3>
        <Link href="/i/flow/login" className={login}>
          로그인
        </Link>
      </div>
    </div>
  );
}
