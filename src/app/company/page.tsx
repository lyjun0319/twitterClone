// src/pages/index.tsx

import { GetServerSideProps, NextPage } from 'next';

interface Post {
  id: number;
  name: string;
  age: number;
}

interface IndexPageProps {
  name: string;
  posts: Post[];
}

const IndexPage: NextPage<IndexPageProps> = (props) => {
  const { name, posts } = props;

  console.log(name);
  return (
    <div>
      <h1>Hello {name}!</h1>
      {/*<ul>*/}
      {/*  {posts.map((post) => (*/}
      {/*    <li key={post.id}>{post.name}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
  const url = 'http://localhost:3009/member';
  const posts: Post[] = await fetch(url).then((res) => res.json());
  return {
    props: {
      name: 'Next',
      posts: posts,
    },
  };
};

export default IndexPage;
