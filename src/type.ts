import { ButtonProps, ComponentWithAs, IconProps } from '@chakra-ui/react';

export interface RadioCardProps {
  children: React.ReactNode;
  desc: string;
  title: string;
  value: string;
  icon: ComponentWithAs<'svg', IconProps>;
}

export interface ButtonThemeType {
  btnText: string;
  chakraProps?: ButtonProps;
  invert?: boolean;
  primary?: boolean;
}

export interface MessageBoxType {
  btnText?: string;
  trust?: boolean;
  loader?: boolean;
  desc: string;
  title: string;
  icon: ComponentWithAs<'svg', IconProps>;
}
