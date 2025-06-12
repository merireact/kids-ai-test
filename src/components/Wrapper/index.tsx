import React from 'react';
import { Outlet } from 'react-router';

import styles from './css/index.module.scss';

function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default Wrapper;
