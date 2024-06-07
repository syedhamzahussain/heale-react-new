import { ButtonProps, ComponentWithAs, IconProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

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
  small?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export interface CountryInputType {
  value: string;
  handleChange?: (e: any) => void;
}

export interface MessageBoxType {
  btnText?: string;
  trust?: boolean;
  loader?: boolean;
  desc: string;
  title: string;
  icon: ComponentWithAs<'svg', IconProps>;
  handleClick?: () => void;
}

export interface VerificationBoxType {
  status?: boolean;
  title: string;
  onClick: () => void;
}


export interface ApplicationCollabType {
  onClose: () => void;
  isOpen: boolean;
}

export interface CardModalType extends ApplicationCollabType {
  onOpenReset: () => void;
}

export interface TransactionDetailType extends ApplicationCollabType {
  title: string;
  account: string;
  icon: ComponentWithAs<'svg', IconProps>;
}

export interface SuccessType {
  desc: string;
  percentage: string;
  title: string;
  icon: ComponentWithAs<'svg', IconProps>;
}

export interface INavLayout {
  title: string;
  icon: ComponentWithAs<'svg', IconProps>;
  link?: string;
  hasDropdown?: boolean;
  isSubItem?: boolean;
  isActive?: boolean;
  subItems?: { id: number; title: string; link: string }[];
}

export interface IChildren {
  children: ReactNode;
}

export interface unpaidinv_table_rows {
  sent_On: string;
  to: string;
  payment_method: string;
  amount: number;
  account: string;
  rowSpan: number;
  iconUser: ComponentWithAs<'svg', IconProps>;
  iconPayment: ComponentWithAs<'svg', IconProps>;
  paymentbadge: string;
  requestedbadge: string;
}

export interface UnPaidInvoicesTable {
  colSpan: number;
  rowSpan: number;
  tableRow: string;
  tableHead: string;
}

export interface approval_table_rows {
  rowSpan: number;
  submit_on: string;
  reciptant: string;
  requestedbybadge: string;
  amount: number;
  requestedbadge: string;
}

export interface EmptyTable {
  emptyMesg: string;
}
