import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}', './locales/**/*.{ts,tsx}'], theme: { extend: { colors: { command: { 950: '#030712', 900: '#07111f', 800: '#0d1b2d' }, neon: '#39ff88', tactical: '#f7c948' }, boxShadow: { glow: '0 0 24px rgba(57, 255, 136, 0.14)' } } }, plugins: [] };
export default config;
