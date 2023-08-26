import React from 'react';
import styles from './styles.module.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <span className={styles.blink} />
      <span className={styles.typewriter}>...</span>
    </div>
  );
}

export default Loader;
