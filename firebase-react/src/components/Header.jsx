import React from 'react';
import styles from './Header.module.css';
import logo from '../images/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['max-width']}>
        <h1>
          <a href='./'>
            <img src={logo} alt='두근두근 비밀일기' />
          </a>
        </h1>
        <div className='login-text'>
          <p>
            환영합니다 <strong>홍길동</strong>님!
          </p>
          <button type='button' className='btn-logout'>
            로그아웃
          </button>
        </div>
      </div>
    </header>
  );
}
