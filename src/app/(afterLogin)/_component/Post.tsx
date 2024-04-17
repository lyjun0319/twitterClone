import * as style from './post.css';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import PostArticle from '@/app/(afterLogin)/_component/postArticle';
import ActionButtons from '@/app/(afterLogin)/_component/actionButtons';

import { faker } from '@faker-js/faker';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function Post() {
  const target = {
    postId: 1,
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/yRsRRjGO.jpg',
    },
    content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
    createdAt: new Date(),
    Images: [
      {
        imageId: 1,
        link: faker.image.urlLoremFlickr(),
      },
    ],
  };

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <div className={style.postImageSection}>
            <Link
              href={`${target.User.id}/status/${target.postId}/photo/${target.Images[0].imageId}`}
            >
              <img src={target.Images[0].link} alt="" />
            </Link>
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
