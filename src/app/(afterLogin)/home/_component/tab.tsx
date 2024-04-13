'use client';
import { useState } from 'react';

export default function Tab() {
  const handleRecomend = () => {};
  const handleFollow = () => {};
  const [tab, setTab] = useState('rec');
  return (
    <div className={'homeFixed'}>
      <div className={''}>홈</div>
      <div className={''}>
        <button onClick={handleRecomend}>추천</button>
      </div>
      <div className={''}>
        <button onClick={handleFollow}>팔로우 중</button>
      </div>
    </div>
  );
}
