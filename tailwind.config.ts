import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',

        // Задний фон
        background: '#101f2d',

        // Для огромных заголовков
        'h1-color-from': '#38bdf8',

        // Для огромных заголовков
        'h1-color-to': '#6ee7b7',

        // Для заголовков
        'h2-color': '#11A5E9',

        // Для блока важной информации
        'aside-color': '#082F49',

        'link-color': '#A78BFA',

        'highlighted-text': '#F9A041',

        'button-color': '#0569A1',

        'extra-button-color': '#AA5DF3',
      },
      fontSize: {
        'h1-font-size': 'clamp(2.1rem,8vw - 1rem,3rem)',
        'h2-font-size': 'clamp(1.3rem, 8vw - 1.8rem, 1.6rem)',
      },
      fontFamily: {
        apple: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
} satisfies Config;
