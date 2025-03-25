import { heroui } from '@heroui/react';
import type { Config } from 'tailwindcss';

// Themes
import {
  fontFamily,
  baseColors,
  fontSize,
  borderRadius,
  colors,
  screens,
  backgroundImage,
} from './src/themes';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      baseColors,
      fontFamily,
      fontSize,
      borderRadius,
      screens,
      backgroundImage,
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors,
        },
        // custom dark themes
        dark: {},
      },
    }),
  ],
};

export default config;
