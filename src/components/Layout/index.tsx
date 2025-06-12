import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './css/index.module.scss';
import { ProgressBar } from '../ProgressBar';
import { StepIndicator } from '../StepIndicator';

const stepMapping: { [key: string]: number } = {
  '/upload': 1,
  '/survey': 2,
  '/result': 3,
};

const TOTAL_STEPS = 3;

export const Layout: React.FC = () => {
  const location = useLocation();
  const currentStep = stepMapping[location.pathname] || 0;

  return (
    <div className={styles.layoutContainer}>
      {currentStep > 0 && (
        <header className={styles.header}>
          <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
        </header>
      )}

      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};
