import React from 'react';
import styles from './StepIndicator.module.scss';
import cn from 'classnames';

type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
  className?: string;
};

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
  className,
}) => {
  return (
    <div className={cn(styles.stepIndicator, className)}>
      Шаг {currentStep}/{totalSteps}
    </div>
  );
};
