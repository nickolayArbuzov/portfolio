import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.Header}>
      <div className='nav'>
        <a href='' className='link'>Главная</a>
        <a href='' className='link'>Скиллы</a>
        <a href='' className='link'>Проекты</a>
        <a href='' className='link'>Контакты</a>
      </div>
    </div>
  );
}

export default Header;
