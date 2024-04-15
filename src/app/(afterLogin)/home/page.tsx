import TabProvider from '@/app/(afterLogin)/home/_component/tabProvider';
import Tab from '@/app/(afterLogin)/home/_component/tab';
import PostForm from '@/app/(afterLogin)/home/_component/postForm';

import * as style from './home.css';
import Post from '@/app/(afterLogin)/_component/Post';

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
