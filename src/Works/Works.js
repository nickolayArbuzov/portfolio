import React from 'react';
import styles from './Works.module.css';
import MyWorks from './MyWorks/MyWorks';

function Works() {
  return (
    <div className={styles.works}>
      <div className={styles.container}>
        <span>Мои работы!</span>
        <MyWorks/>
      </div>
    </div>
  );
}

export default Works;
