import React from 'react';
import { ListPosts } from '@/lib/API/api-requests';
import SessionCard from '@/app/_components/sessionCard';
import { companySt, companyListSt } from '@/app/company/company.css';

interface listType {
  id: number;
  name: string;
  age: number;
}

const Page = async ({}) => {
  const data: listType[] = await ListPosts();

  if (!data) return false;

  return (
    <div className={companySt}>
      <SessionCard>
        <ul className={companyListSt}>
          {data.map((item: listType) => {
            const { id, name, age } = item;
            return (
              <li key={id}>
                <div>
                  <span>이름</span>
                  <span>{name}</span>
                </div>
                <div>
                  <span>나이</span>
                  <span>{age}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </SessionCard>
    </div>
  );
};

export default Page;
