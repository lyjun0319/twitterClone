import Link from 'next/link';

export default function Trend() {
  return (
    <Link href={'/search?q=트랜드'}>
      <div>실시간트렌드</div>
      <div>제로초</div>
      <div>1,234 posts</div>
    </Link>
  );
}
