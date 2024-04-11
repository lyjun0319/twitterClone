import { customAxios } from '@/lib/API/customAxios';
import { notFound } from 'next/navigation';

interface listType {
  id: number;
  name: string;
  age: number;
}
export const ListPosts = async () => {
  try {
    const res = await customAxios.get('/member');
    if (res.status === 200) {
      return res.data; // 데이터 반환
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error(error);
    notFound();
  }
};
