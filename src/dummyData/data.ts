import {
  AccountIcon,
  AmountIcon,
  BusinessIcon,
  CalendarIcon,
  CardIcon,
  CategoriesIcon,
  DashboardIcon,
  DiamondIcon,
  MethodIcon,
  PaymentIcon,
  PersonalIcon,
  RefferalIcon,
  SearchIcon,
  StatusIcon,
  TransactionIcon,
} from 'modules/shared/Icons';

export const options = [
  {
    id: 0,
    title: 'Personal',
    desc: "I'm signing up to access my company's logistics features and tools.",
    icon: PersonalIcon,
  },
  {
    id: 1,
    title: 'Business',
    desc: "I'm setting up my business account to manage logistics operations and team collaboration. This includes Owner Operators.",
    icon: BusinessIcon,
  },
];

export const bankOptions = [
  {
    id: 0,
    title: 'Personal bank account',
    desc: 'Add a personal bank account to deposit and withdraw funds and earn rewards',
    icon: PersonalIcon,
  },
  {
    id: 1,
    title: 'Business bank account',
    desc: 'Add a business bank account to receive and make payments, handle invoices, and earn rewards for your business',
    icon: BusinessIcon,
  },
];

export const SidebarNav = [
  {
    id: 0,
    title: 'Home',
    link: '/dashboard',
    icon: DashboardIcon,
    hasDropdown: false,
  },
  {
    id: 1,
    title: 'Transactions',
    link: '/dashboard/transactions',
    icon: TransactionIcon,
    hasDropdown: false,
  },
  {
    id: 2,
    title: 'Payments',
    link: '/dashboard/payments',
    icon: PaymentIcon,
    hasDropdown: true,
    subItems: [
      {
        id: 21,
        title: 'Requests',
        link: '/',
      },
      {
        id: 22,
        title: 'Recipients',
        link: '/',
      },
    ],
  },
  {
    id: 3,
    title: '$HEALE',
    link: '/dashboard/heale',
    icon: DiamondIcon,
    hasDropdown: false,
  },
  {
    id: 4,
    title: 'Cards',
    link: '/dashboard/cards',
    icon: CardIcon,
    hasDropdown: false,
  },
  {
    id: 5,
    title: 'Accounts',
    icon: AccountIcon,
    hasDropdown: true,
    subItems: [
      {
        id: 51,
        title: 'Checking ••••3849',
        link: '/',
      },
      {
        id: 52,
        title: 'P2P ••••C1cb',
        link: '/',
      },
      {
        id: 53,
        title: 'HEALE ••••W9qb',
        link: '/',
      },
    ],
  },
  {
    id: 6,
    title: 'Referrals',
    link: '/',
    icon: RefferalIcon,
    hasDropdown: false,
  },
];

export const NotiData = [
  {
    id: 0,
    title: 'NexGen Transport',
    desc: 'sent you a payment',
    time: '18 hours ago',
    status: 'unread',
  },
  {
    id: 1,
    title: 'Floyd Miles',
    desc: 'request a payment',
    time: '1 day ago',
    status: 'read',
  },
];

export const filterData = [
  { iconName: CalendarIcon, label: 'Date' },
  { iconName: SearchIcon, label: 'Keywords' },
  { iconName: AmountIcon, label: 'Amount' },
  { iconName: MethodIcon, label: 'Method' },
  { iconName: CardIcon, label: 'Cards' },
  { iconName: AccountIcon, label: 'Accounts' },
  { iconName: CategoriesIcon, label: 'Categories' },
  { iconName: StatusIcon, label: 'Status' },
];
