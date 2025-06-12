import React from 'react';
import styles from './css/index.module.scss';
import cn from 'classnames';

type TextareaProps = {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  placeholder?: string;
  rows?: number;
  className?: string;
} & Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'onChange' | 'value'
>;

export const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  value,
  onChange,
  name,
  placeholder = '',
  rows = 4,
  className,
  ...rest
}) => {
  return (
    <div className={cn(styles.textareaContainer, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={styles.textarea}
        {...rest}
      />
    </div>
  );
};
