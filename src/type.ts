import { ButtonProps, ComponentWithAs, IconProps } from '@chakra-ui/react';

export interface RadioCardProps {
  children: React.ReactNode;
  desc: string;
  title: string;
  value: string;
  icon: ComponentWithAs<'svg', IconProps>;
}

export interface ButtonThemeType {
  type?: string;
  btnText: string;
  chakraProps?: ButtonProps;
  invert?: boolean;
  primary?: boolean;
  primaryOutline?: boolean;
  isLoading?: boolean;
}

export interface MessageBoxType {
  btnText?: string;
  trust?: boolean;
  loader?: boolean;
  desc: string;
  title: string;
  icon: ComponentWithAs<'svg', IconProps>;
}

export interface VerificationBoxType {
  title: string;
  link: string;
  status?: boolean;
}

export interface ApplicationCollabType {
  onClose: () => void;
  isOpen: boolean;
}

export interface SuccessType {
  desc: string;
  percentage: string;
  title: string;
  icon: ComponentWithAs<'svg', IconProps>;
}
