/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-07 12:22:39
 * @FilePath: /minum-website/src/app/layout.tsx
 */
import type { Metadata } from 'next'
import '@/styles/global.css'
import { Providers } from './providers'
import { siteConfig } from '@/config/site';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    icons: {
        icon: "/favicon.ico",
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-cn" className='light'>
            <head>
                <link rel="stylesheet" href="https://cdn.bootcss.com/animate.css/3.7.2/animate.min.css"/>
            </head>
            <body className='site_wrapper'>
                <SiteNavbar />
                <Providers>
                    {children}
                </Providers>
                <SiteFooter />
            </body>
        </html>
    );
}
