import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#44c7de',
        'brand-dark': '#001E56',
        'brand-black': '#232323',
        'brand-dark-black': '#333333',
        'white-trans': 'rgba(255, 255, 255, 0.8)',
        'black-trans': 'rgba(0, 0, 0, 0.7)',
      },
      spacing: {
        'sm1': '0.25em',
        'sm3': '0.75em',
        'sm9': '2.25em',
        'sm12': '3em',
      },
      fontSize: {
        'text12': '0.75rem',
        'text18': '1.125rem',
        'text36': '2.25rem',
        'text60': '3.75rem',
      },
      animation: {
        'colorShift': 'bgAnimate 15s linear infinite',
      },
      keyframes: {
        bgAnimate: {
          '0%': {
            filter: 'blur(50px)',
          },
          '100%': {
            filter: 'blur(50px) hue-rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
