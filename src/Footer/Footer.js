import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <span>Арбузов Николай</span>
        <span>2019 Все права защищены</span>
      </div>
    </div>
  );
}

export default Footer;
