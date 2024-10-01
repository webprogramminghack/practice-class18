import React, {
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  MouseEvent,
  FocusEvent,
} from 'react';

// 1st way
interface CustomButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary';
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  size,
  variant,
  ...rest
}) => {
  console.log(size);
  console.log(variant);

  return <button {...rest}>{children}</button>;
};

// 2nd way
type ElementPropType<
  E extends ElementType,
  K extends keyof ComponentPropsWithoutRef<E>
> = ComponentPropsWithoutRef<E>[K];

type ButtonPropType<K extends keyof ComponentPropsWithoutRef<'button'>> =
  ElementPropType<'button', K>;

type CustomButtonProps2 = {
  children: ReactNode;
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary';
  onClick?: ButtonPropType<'onClick'>;
  onFocus?: ButtonPropType<'onFocus'>;
  onBlur?: ButtonPropType<'onBlur'>;
  onMouseEnter?: ButtonPropType<'onMouseEnter'>;
  onMouseLeave?: ButtonPropType<'onMouseLeave'>;
  disabled?: ButtonPropType<'disabled'>;
};

export const CustomButton2: React.FC<CustomButtonProps2> = ({
  children,
  size,
  variant,
  ...rest
}) => {
  console.log(size);
  console.log(variant);
  return <button {...rest}>{children}</button>;
};

// 3rd way
type CustomButtonProps3 = {
  children: ReactNode;
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (e: FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (e: FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const CustomButton3: React.FC<CustomButtonProps3> = ({
  children,
  size,
  variant,
  ...rest
}) => {
  console.log(size);
  console.log(variant);
  return <button {...rest}>{children}</button>;
};
