import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { avatarSt } from '@/app/_components/avatar.css';

interface avatarProps {
  href: string;
  size?: 'small' | 'mid' | 'large';
  imgUrl?: string;
  imgAlt?: string;
  name?: string;
}
const Avatar = ({
  href = '',
  size = 'small',
  imgUrl,
  imgAlt = '이미지 설명',
  name = '이름',
}: avatarProps) => {
  const notImg = imgUrl ? 'img' : 'notImg';
  return (
    <Link href={href} className={avatarSt({ size, notImg })}>
      {imgUrl ? <Image src={imgUrl} alt={imgAlt} fill /> : <span>{name}</span>}
    </Link>
  );
};

export default Avatar;
