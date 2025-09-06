/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ochre: {
          50: '#FDF6F0',
          100: '#FAEBD7',
          200: '#F5DEB3',
          300: '#DEB887',
          400: '#D2B48C',
          500: '#BC9A6A',
          600: '#8B4513',
          700: '#654321',
          800: '#4A2C17',
          900: '#2F1B0C'
        },
        gold: {
          50: '#FEFCF0',
          100: '#FDF6D3',
          200: '#FBEAA8',
          300: '#F7D76E',
          400: '#F1C40F',
          500: '#B8860B',
          600: '#A6780A',
          700: '#8B6508',
          800: '#6B4E06',
          900: '#4A3604'
        },
        burnt: {
          50: '#FEF5F0',
          100: '#FDE8D7',
          200: '#FACAB0',
          300: '#F69D7A',
          400: '#F17144',
          500: '#CC5500',
          600: '#B04A00',
          700: '#944000',
          800: '#783500',
          900: '#5C2A00'
        },
        sandalwood: {
          50: '#FAF8F4',
          100: '#F4F0E8',
          200: '#E8DDD0',
          300: '#DBC5A8',
          400: '#C4A484',
          500: '#B8936D',
          600: '#9A7B5A',
          700: '#7D6448',
          800: '#604D37',
          900: '#433627'
        },
        maroon: {
          50: '#FDF2F2',
          100: '#FCE1E1',
          200: '#F7C8C8',
          300: '#F1A3A3',
          400: '#E87171',
          500: '#DC2626',
          600: '#B91C1C',
          700: '#991B1B',
          800: '#800000',
          900: '#590000'
        },
        indigo: {
          50: '#F0F0FF',
          100: '#E0E0FF',
          200: '#C7C7FF',
          300: '#A3A3FF',
          400: '#7A7AFF',
          500: '#5151FF',
          600: '#3F3FFF',
          700: '#2E2EFF',
          800: '#2E0854',
          900: '#1A0330'
        },
        parchment: {
          50: '#FEFEFE',
          100: '#F9F7F4',
          200: '#F4F1E8',
          300: '#EFE9DC',
          400: '#E8E0D0',
          500: '#E0D5C0',
          600: '#D3C7B8',
          700: '#C5B8A6',
          800: '#B8A995',
          900: '#8B7D6B'
        }
      },
      fontFamily: {
        'display': ['Cinzel', 'Noto Sans Devanagari', 'serif'],
        'serif': ['Crimson Text', 'Georgia', 'serif'],
        'devanagari': ['Noto Sans Devanagari', 'serif']
      },
      boxShadow: {
        'golden': '0 0 20px rgba(212, 175, 55, 0.3), 0 4px 12px rgba(139, 69, 19, 0.2)',
        'manuscript': '0 4px 8px rgba(139, 69, 19, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'temple': '0 8px 16px rgba(139, 69, 19, 0.15), 0 2px 4px rgba(139, 69, 19, 0.1)'
      },
      backgroundImage: {
        'parchment': 'linear-gradient(45deg, rgba(139, 69, 19, 0.02) 0%, transparent 20%), radial-gradient(circle at 20% 20%, rgba(184, 134, 11, 0.03) 0%, transparent 30%)',
        'stone': 'linear-gradient(135deg, #D3C7B8 0%, #8B7D6B 100%)',
        'gold-gradient': 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #CD7F32 100%)'
      },
      animation: {
        'unfurl': 'unfurl 0.8s ease-out forwards',
        'ink-fade': 'inkAppear 1s ease-out forwards'
      }
    },
  },
  plugins: [],
};
