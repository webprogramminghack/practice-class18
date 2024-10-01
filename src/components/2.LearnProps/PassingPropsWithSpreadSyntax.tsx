import { ButtonOptions, CustomButton4 } from './HandleClassNameProps';

export const PassingPropsWithSpreadSyntax = () => {
  const buttonProps: ButtonOptions = {
    size: 'large',
    variant: 'secondary',
    onClick: () => console.log('Clicked!'),
  };

  return <CustomButton4 {...buttonProps}>Click me</CustomButton4>;
};
