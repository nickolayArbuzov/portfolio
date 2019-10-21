import React from 'react';
import styles from './Header.module.css';
import NavMenu from './NavMenu/NavMenu';

function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.container}>
        <NavMenu/>
      </div>
    </div>
  );
}

export default Header;
