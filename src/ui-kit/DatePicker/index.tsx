import React from 'react';
import ReactDatePicker, {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import { ru } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './css/index.module.scss';
import cn from 'classnames';

registerLocale('ru', ru);
setDefaultLocale('ru');

type DatePickerProps = {
  label: string;
  id: string;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  className?: string;
};

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  id,
  selectedDate,
  onChange,
  className,
}) => {
  return (
    <div className={cn(styles.datePickerContainer, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <ReactDatePicker
        id={id}
        selected={selectedDate}
        onChange={onChange}
        dateFormat="dd.MM.yyyy"
        className={styles.input}
        calendarClassName={styles.calendar}
        wrapperClassName={styles.datePickerWrapper}
        popperPlacement="bottom-start"
        showPopperArrow={false}
      />
    </div>
  );
};
