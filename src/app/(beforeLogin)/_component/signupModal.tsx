import Modal from '@/app/(beforeLogin)/_component/modal';

export default function SignupModal() {
  return (
    <Modal title="계정을 생성하세요..">
      <form action="">
        <div>
          <div className={''}>
            <label htmlFor="">아이디</label>
            <input type="text" />
          </div>
          <div className={''}>
            <label htmlFor="">닉네임</label>
            <input type="text" />
          </div>
          <div className={''}>
            <label htmlFor="">비밀번호</label>
            <input type="text" />
          </div>
        </div>
      </form>
    </Modal>
  );
}
