import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    future: {
        hoverOnlyWhenSupported: true,
    },
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['NunitoSans', ...defaultTheme.fontFamily.sans],
            },

            colors: {
                colorText: 'hsl(var(--color-text) / <alpha-value>)',
                colorBg: 'hsl(var(--color-bg) / <alpha-value>)',
                colorElement: 'hsl(var(--color-element) / <alpha-value>)',
                colorInput: 'hsl(var(--color-input) / <alpha-value>)',
            },
            gridTemplateColumns: {
                appGrid: 'repeat(auto-fit, minmax(250px, 1fr))',
            },
            screens: {
                xsm: '375px',
            },
        },
    },
    plugins: [],
} satisfies Config;
