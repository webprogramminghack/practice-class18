import clsx from 'clsx';
import React, { ReactNode, MouseEvent, FocusEvent, CSSProperties } from 'react';
import styles from './HandleClassNameProps.module.scss';

type CustomButtonProps4 = {
  children: ReactNode;
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (e: FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (e: FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
};

export type ButtonOptions = Omit<CustomButtonProps4, 'children'>;

export const CustomButton4: React.FC<CustomButtonProps4> = ({
  children,
  size,
  variant,
  className,
  ...rest
}) => {
  console.log(size);
  console.log(variant);
  return (
    <button
      className={clsx(styles.button, styles[size], styles[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
};
