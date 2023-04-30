/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors')
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                /* text */
                textWhite: 'hsl(0, 0%, 100%)',
            },
            boxShadow: {
                customInnerBottom: 'inset 0px -4px 0px 0 rgb(0 0 0 / 0.3)',
            },
        },
    },
    plugins: [
        createThemes({
            1: {
                // theme 1
                // bg
                mainBackground: 'hsl(222, 26%, 31%)',
                activeBackground: 'hsl(223, 31%, 20%)',
                screenBackground: 'hsl(224, 36%, 15%)',

                // keys
                keyBackgroundPrimary: 'hsl(225, 21%, 49%)',
                keyShadowPrimary: 'hsl(224, 28%, 35%)',

                keySecondary: 'hsl(6, 63%, 50%)',
                keyShadowSecondary: 'hsl(6, 70%, 34%)',

                keyBackgroundTertiary: 'hsl(30, 25%, 89%)',
                keyShadowTertiary: 'hsl(28, 16%, 65%)',

                /* text */
                textColorPrimary: 'hsl(221, 14%, 31%)',
            },
            2: {
                // theme 2
                // bg
                mainBackground: 'hsl(0, 0%, 90%)',
                activeBackground: 'hsl(0, 5%, 81%)',
                screenBackground: 'hsl(0, 0%, 93%)',

                // keys

                keyBackgroundPrimary: 'hsl(185, 42%, 37%)',
                keyShadowPrimary: 'hsl(185, 58%, 25%)',

                keySecondary: 'hsl(25, 98%, 40%)',
                keyShadowSecondary: 'hsl(25, 99%, 27%)',

                keyBackgroundTertiary: 'hsl(45, 7%, 89%)',
                keyShadowTertiary: 'hsl(35, 11%, 61%)',

                /* text */
                textColorPrimary: 'hsl(60, 10%, 19%)',
            },
            3: {
                // theme 3
                // bg
                mainBackground: 'hsl(268, 75%, 9%)',
                activeBackground: 'hsl(268, 71%, 12%)',

                // keys

                keyBackgroundPrimary: 'hsl(281, 89%, 26%)',
                keyShadowPrimary: 'hsl(285, 91%, 52%)',

                keySecondary: 'hsl(176, 100%, 44%)',
                keyShadowSecondary: 'hsl(177, 92%, 70%)',

                keyBackgroundTertiary: 'hsl(268, 47%, 21%)',
                keyShadowTertiary: 'hsl(35, 11%, 61%)',

                /* text */
                textColorPrimary: 'hsl(52, 100%, 62%)',
                textColorSecondary: 'hsl(198, 20%, 13%)',
            },
        }),
    ],
}
