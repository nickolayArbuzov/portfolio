import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <a href='' className={styles.link}>Главная</a>
          <a href='' className={styles.link}>Скиллы</a>
          <a href='' className={styles.link}>Проекты</a>
          <a href='' className={styles.link}>Контакты</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
