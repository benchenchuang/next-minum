/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-07 13:20:00
 * @FilePath: /minum-website/tailwind.config.ts
 */
import {nextui} from "@nextui-org/react";
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        screens: {
            'sm': '320px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1200px',
            '2xl': '1536px',
        },
        extend: {
            colors:{
                'site-primary':'#153E8B',
                'site-gray':'#888888'
            },
            backgroundImage:{
                "navbar-gradient": "linear-gradient(90deg, rgba(13, 24, 66, 0.7) 0%, rgba(3, 13, 65, 0.5) 100%)",
                "navbar-active":"linear-gradient(0, #0049D1 0%, rgba(72, 122, 217, 0.2) 100%)",
                'light-bg':'#F5F8FC'
            }
        },
    },
    darkMode: "class",
    plugins: [nextui()]
}
export default config
