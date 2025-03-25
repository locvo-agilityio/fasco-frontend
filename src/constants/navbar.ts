import { SearchIcon, ShoppingBagIcon, StarIcon, UserIcon } from 'lucide-react';
import { ROUTES } from './router';

export const DEFAULT_NAVBAR = [
  {
    id: 1,
    title: 'Home',
    path: ROUTES.HOME,
  },
  {
    id: 2,
    title: 'Deals',
    path: ROUTES.DEALS,
  },
  {
    id: 3,
    title: 'New Arrivals',
    path: ROUTES.NEW_ARRIVALS,
  },
  {
    id: 4,
    title: 'Packages',
    path: ROUTES.PACKAGES,
  },
];

export const AUTH_NAVBAR = [
  {
    id: 1,
    title: 'Home',
    path: ROUTES.HOME,
  },
  {
    id: 2,
    title: 'Shop',
    path: ROUTES.SHOP,
  },
  {
    id: 3,
    title: 'Products',
    path: ROUTES.PRODUCTS,
  },
  {
    id: 4,
    title: 'Pages',
    path: ROUTES.PAGES,
  },
];

export const HEADER_TOOLS = [
  {
    id: 1,
    icon: SearchIcon,
    path: ROUTES.HOME,
  },
  {
    id: 2,
    icon: UserIcon,
    path: ROUTES.PROFILE,
  },
  {
    id: 3,
    icon: StarIcon,
    path: ROUTES.WHISTLIST,
  },
  {
    id: 4,
    icon: ShoppingBagIcon,
    path: ROUTES.CART,
  },
];

export const FOOTER_NAVBAR = [
  {
    id: 1,
    title: 'Support Center',
    path: '/support-center',
  },
  {
    id: 2,
    title: 'Invoicing',
    path: '/invoicing',
  },
  {
    id: 3,
    title: 'Contract',
    path: '/contract',
  },
  {
    id: 4,
    title: 'Careers',
    path: '/careers',
  },
  {
    id: 5,
    title: 'Blog',
    path: '/blog',
  },
  {
    id: 6,
    title: 'FAQ,s',
    path: '/faq',
  },
];

export const BREADCRUMBS_SHOP = [
  {
    id: 1,
    title: 'Home',
    path: ROUTES.HOME,
  },
  {
    id: 2,
    title: 'Fashion',
    path: ROUTES.SHOP,
  },
];

export const BREADCRUMBS_CART = [
  {
    id: 1,
    title: 'Home',
    path: ROUTES.HOME,
  },
  {
    id: 2,
    title: 'Your Shopping Cart',
    path: ROUTES.CART,
  },
];
