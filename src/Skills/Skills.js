import React from 'react';
import styles from './Skills.module.css';
import Skill from './Skill/Skill';

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <span>Мои Скиллы!</span>
        <Skill/>
        <Skill/>
        <Skill/>
      </div>
    </div>
  );
}

export default Skills;
