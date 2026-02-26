import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                mystic: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7e22ce',
                    800: '#6b21a8',
                    900: '#581c87',
                    950: '#3b0764',
                },
                rose: {
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48',
                },
                accent: {
                    silver: '#c0c0d0',
                    ice: '#a5b4fc',
                },
                surface: {
                    dark: 'var(--bg-primary)',
                    card: 'var(--bg-card)',
                },
            },
            fontFamily: {
                display: ['Playfair Display', 'serif'],
                heading: ['Outfit', 'sans-serif'],
                body: ['Cormorant Garamond', 'serif'],
                sans: ['Outfit', 'sans-serif'],
            },
            animation: {
                float: 'float-gentle 6s ease-in-out infinite',
                'float-slow': 'float-gentle 8s ease-in-out infinite',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                'moon-glow': 'moonGlow 4s ease-in-out infinite',
            },
            keyframes: {
                'float-gentle': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                },
                moonGlow: {
                    '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.4))' },
                    '50%': { filter: 'drop-shadow(0 0 20px rgba(192, 132, 252, 0.6))' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
