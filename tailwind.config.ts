import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssForms from '@tailwindcss/forms';

export default {
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
        },
    },
    plugins: [
        tailwindcssForms({
            strategy: 'class',
        }),
    ],
} satisfies Config;
