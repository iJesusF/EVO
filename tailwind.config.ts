import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        command: {
          950: '#030712',
          900: '#07111f',
          800: '#0d1b2d'
        },
        neon: '#39ff88',
        tactical: '#f7c948'
      },
      boxShadow: {
        glow: '0 0 24px rgba(45, 212, 191, 0.16)'
      }
    }
  },
  plugins: []
};

export default config;
