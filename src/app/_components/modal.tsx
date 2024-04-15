import { modalWrap, modal, modalHeader } from '@/app/_components/modal.css';

import ModalCloseButton from '@/app/_components/modalCloseButton';

type Props = {
  /** 모달 body 내용*/
  children: React.ReactNode;
  title: string;
};
export default function Modal({ children, title }: Props) {
  return (
    <div className={modalWrap}>
      <div className={modal}>
        <div className={modalHeader}>
          <div>{title}</div>
          <ModalCloseButton />
        </div>
        {children}
      </div>
    </div>
  );
}
