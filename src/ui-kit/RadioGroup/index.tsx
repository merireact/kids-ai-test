import React from 'react';
import styles from './css/index.module.scss';
import cn from 'classnames';

type Option = {
  label: string;
  value: string | number;
};

type RadioGroupProps = {
  label: string;
  name: string;
  options: Option[];
  selectedValue: string | number | null;
  onChange: (value: string | number) => void;
  className?: string;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  selectedValue,
  onChange,
  className,
}) => {
  return (
    <div className={cn(styles.container, className)}>
      <p className={styles.label}>{label}</p>
      <div className={styles.optionsWrapper}>
        {options.map((option) => (
          <label key={option.value} className={styles.option}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className={styles.realRadio}
            />
            <span className={styles.customRadio} />
            <span className={styles.optionLabel}>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
