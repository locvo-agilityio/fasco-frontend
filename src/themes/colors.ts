import { ThemeColors } from '@heroui/react';

export const baseColors = {
  primary: '#484848',
  secondary: '#8A8A8A',
  muted: '#DADADA',

  black: '#000000',
  white: '#FFFFFF',
  'white-cloud': '#FAFAFA',
  'gray-soft': '#F5F5F5',
  'gray-neutral': '#9D9D9D',
  'gray-medium': '#838383',

  'blue-pastel': '#B1C5D4',
  'blue-soft': '#8DB4D2',
  'blue-sky': '#6CB9FF',
  blue: '#6CA7FF',
  'blue-royal': '#5B86E5',
  'navy-deep': '#063E66',

  lavender: '#C6AEC7',
  purple: '#B66CFF',
  'purple-soft': '#8A6CFF',

  'green-pastel': '#C1E1C1',
  success: '#9BFF6C',
  green: '#6CFF9E',

  'aqua-light': '#BEDCE3',
  teal: '#6CFFDC',

  cream: '#EBE6DB',
  yellow: '#FFF06C',
  warning: '#FCA120',
  orange: '#FF7629',

  'pink-pastel': '#FFD1DC',
  pin: '#FC6CFF',
  error: '#DA3F3F',
  danger: '#FF4646',

  info: '#6CF6FF',
  brown: '#836953',
};

export const backgroundImage = {
  'gradient-white': 'linear-gradient(to top, #FFFFFF, #FAFAFA)',
};

export const colors: Partial<ThemeColors> = {
  background: {
    100: baseColors.white,
    200: baseColors['white-cloud'],
    300: baseColors['gray-soft'],
    400: baseColors['gray-neutral'],
    500: baseColors.muted,
    600: baseColors['gray-medium'],
  },

  foreground: {
    100: baseColors.white,
    200: baseColors['blue-royal'],
    300: baseColors.secondary,
    400: baseColors.primary,
    500: baseColors.black,
  },

  primary: {
    50: baseColors.muted,
    100: baseColors.secondary,
    200: baseColors.primary,
    300: baseColors.black,
  },

  secondary: {
    50: baseColors['blue-pastel'],
    100: baseColors['blue-soft'],
    200: baseColors['blue-sky'],
    300: baseColors.blue,
    400: baseColors['blue-royal'],
    500: baseColors['navy-deep'],
    600: baseColors.lavender,
    700: baseColors.purple,
    800: baseColors['purple-soft'],
  },

  warning: {
    50: baseColors.cream,
    100: baseColors.yellow,
    200: baseColors.warning,
    300: baseColors.orange,
  },

  danger: {
    50: baseColors['pink-pastel'],
    100: baseColors.pin,
    200: baseColors.error,
    300: baseColors.danger,
  },

  success: {
    50: baseColors['green-pastel'],
    100: baseColors.success,
    200: baseColors.green,
  },
};
