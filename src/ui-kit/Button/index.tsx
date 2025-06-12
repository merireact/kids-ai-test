import React from 'react';
import classNames from 'classnames';
import styles from './css/index.module.scss';

export const BUTTON_VARIANTS = {
  primary: 'primary',
  secondary: 'secondary',
  inverse: 'inverse',
} as const;

type ButtonVariant = keyof typeof BUTTON_VARIANTS;
type IconPosition = 'left' | 'right';

type ButtonProps = {
  children: React.ReactNode;
  icon?: string;
  iconAlt?: string;
  iconPosition?: IconPosition;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  height?: number;
  width?: number | string | null;
  paddingHorizontal?: number;
  variant?: ButtonVariant;
  className?: string;
  hideTextOnMobile?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  iconAlt = 'icon',
  iconPosition = 'right',
  onClick,
  isDisabled = false,
  height = 40,
  width = null,
  paddingHorizontal = 30,
  variant = 'primary',
  className,
  hideTextOnMobile = false,
  ...rest
}) => {
  const buttonClassName = classNames(
    styles.button,
    styles[variant],
    {
      [styles.disabled]: isDisabled,
      [styles.hideTextOnMobile]: hideTextOnMobile,
      [styles.iconRight]: icon && iconPosition === 'right',
      [styles.withIcon]: !!icon,
    },
    className,
  );

  const buttonStyle = {
    height: `${height}px`,
    width:
      width === null
        ? 'unset'
        : typeof width === 'string'
          ? width
          : `${width}px`,
    padding: `0 ${paddingHorizontal}px`,
  };

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) return;
    onClick?.(ev);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={buttonClassName}
      style={buttonStyle}
      disabled={isDisabled}
      {...rest}
    >
      {iconPosition === 'left' && icon && (
        <img className={styles.icon} src={icon} alt={iconAlt} />
      )}

      <span className={styles.text}>{children}</span>

      {iconPosition === 'right' && icon && (
        <img className={styles.icon} src={icon} alt={iconAlt} />
      )}
    </button>
  );
};
