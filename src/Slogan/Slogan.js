import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
    <div className={styles.slogan}>
      <div className={styles.container}>
        <span>Рассматриваю варианты удалённой работы</span>
        <div>НАНЯТЬ МЕНЯ</div>
      </div>
    </div>
  );
}

export default Slogan;
