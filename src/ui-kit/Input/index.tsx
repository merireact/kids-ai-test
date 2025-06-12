import React from 'react';
import styles from './css/index.module.scss';
import cn from 'classnames';

type InputProps = {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

export const Input: React.FC<InputProps> = ({
  label,
  id,
  value,
  onChange,
  name,
  placeholder = '',
  className,
  ...rest
}) => {
  return (
    <div className={cn(styles.inputContainer, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        {...rest}
      />
    </div>
  );
};
