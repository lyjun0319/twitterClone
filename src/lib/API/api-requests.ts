export const ListPosts = async () => {
  const res = await fetch(`http://localhost:3009/member`);
  const data: [] = await res.json();
  return data;
};
