import React from 'react';
import styles from './css/index.module.scss';
import cn from 'classnames';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
  className?: string;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  className,
}) => {
  const percentage = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  return (
    <div className={cn(styles.container, className)}>
      <div
        className={styles.filler}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
