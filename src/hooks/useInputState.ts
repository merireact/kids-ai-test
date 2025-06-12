import { useState } from 'react';

type EventType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type HandleValueType<T> = (
  ev: EventType | T | ((prev: T) => T),
  setInstantly?: boolean,
) => boolean | void;

function useInputState<T = string>(
  defaultValue: T,
): [
  T,
  HandleValueType<T>,
  string,
  React.Dispatch<React.SetStateAction<string>>,
] {
  const [value, setValue] = useState<T>(defaultValue);
  const [error, setError] = useState<string>('');

  const handleValue: HandleValueType<T> = (ev, setInstantly = false) => {
    if (setInstantly) {
      setValue(ev as T);
    } else {
      if (!ev) return false;

      if (
        typeof ev === 'string' ||
        typeof ev === 'number' ||
        typeof ev === 'function'
      ) {
        setValue(ev as T);
      } else {
        setValue((ev as EventType).target.value as T);
      }
    }

    if (error) {
      setError('');
    }
  };

  return [value, handleValue, error, setError];
}

export default useInputState;
