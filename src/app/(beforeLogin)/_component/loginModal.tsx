'use client';
import { useState } from 'react';
import Modal from '@/app/(beforeLogin)/_component/modal';

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const onSubmit = () => {};
  const onChangeId = () => {};
  const onChangePassword = () => {};

  return (
    <Modal title="로그인 하세요.">
      <form onSubmit={onSubmit}>
        <div className={''}>
          <div className={''}>
            <label className={''} htmlFor="id">
              아이디
            </label>
            <input
              id="id"
              className={''}
              value={id}
              onChange={onChangeId}
              type="text"
              placeholder=""
            />
          </div>
          <div className={''}>
            <label className={''} htmlFor="password">
              비밀번호
            </label>
            <input
              id="password"
              className={''}
              value={password}
              onChange={onChangePassword}
              type="password"
              placeholder="비밀번호 변경"
            />
          </div>
        </div>
        <div className={'style.message'}>{message}</div>
        <div className={''}>
          <button className={''} disabled={!id && !password}>
            로그인하기
          </button>
        </div>
      </form>
    </Modal>
  );
}
