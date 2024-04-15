'use client';
import Trend from '@/app/(afterLogin)/_component/trend';
import * as style from './trand.css';
import { usePathname } from 'next/navigation';
export default function TrendSection() {
  const pathName = usePathname();

  if (pathName === '/explore') return null;

  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
