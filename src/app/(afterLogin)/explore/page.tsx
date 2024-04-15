import SerachForm from '@/app/(afterLogin)/_component/searchForm';
import * as style from './explore.css';
import Trend from '@/app/(afterLogin)/_component/trend';

export default function Page() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SerachForm />
      </div>
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
    </main>
  );
}
