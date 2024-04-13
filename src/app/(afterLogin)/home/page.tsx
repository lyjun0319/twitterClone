import { postList } from '@/app/(afterLogin)/home/home.css';
import TabProvider from '@/app/(afterLogin)/home/_component/tabProvider';
import Tab from '@/app/(afterLogin)/home/_component/tab';
import PostForm from '@/app/(afterLogin)/home/_component/postForm';

export default function Home() {
  return (
    <main className={postList}>
      <TabProvider>
        <Tab />
        <PostForm />
      </TabProvider>
    </main>
  );
}
