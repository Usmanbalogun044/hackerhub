import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:'#f2f8ff',100:'#dcebff',200:'#b9d6ff',300:'#8bb8ff',400:'#5a97ff',500:'#2e75ff',600:'#1e59d6',700:'#153fa3',800:'#0d2a73',900:'#071a4a'
        }
      }
    }
  },
  plugins: [],
};
export default config;
