/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-18 21:24:07
 * @FilePath: /minum-website/tailwind.config.ts
 */
import { nextui } from "@nextui-org/react";
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
            colors: {
                'site-primary': '#153E8B',
                'sub-primary': '#6387C9',
                'site-gray': '#888888',
            },
            backgroundColor: {
                "block-light": '#F6F9FC',
                'block-grey': "#D8E2F2"
            },
            backgroundImage: {
                "navbar-gradient": "linear-gradient(90deg, rgba(13, 24, 66, 0.5) 0%, rgba(3, 13, 65, 0.4) 100%)",
                "navbar-active": "linear-gradient(0, #0049D1 0%, rgba(72, 122, 217, 0.2) 100%)",
                "data-structure": "url('/images/home/structure_bg.png')",
                "card-module":"linear-gradient(0deg, rgba(168, 188, 224, 0.3) 0%, rgba(176, 208, 244, 0) 100%)",
                "module-item":"linear-gradient(180deg, #F1F6FE 0%, #D3E1FB 100%)",
                "module-active":"linear-gradient(90deg, #BFD0F5 0%, #0764E6 100%)",
                "diagram-module":" linear-gradient(225deg, rgba(64, 76, 168, 1) 0%, rgba(16, 34, 84, 1) 33.64%, rgba(6, 33, 107, 1) 65.81%, rgba(29, 72, 171, 1) 100%)",
                "benefit-header":"linear-gradient(90deg, #153E8B 0%, #84B1F0 100%)",
                "mask-module":"linear-gradient(180deg, rgba(0, 46, 133, 0.5) 0%, rgba(0, 115, 191, 0.4) 100%)"
            },
            animation: {
                bounceOne: 'bounce 1s'
            }
        },
    },
    darkMode: "class",
    plugins: [nextui()]
}
export default config
