/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-27 19:15:26
 * @FilePath: /minum-website/src/app/layout.tsx
 */
import '@/styles/global.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { siteConfig } from '@/config/site';
import { Toaster } from 'react-hot-toast';
import BackTop from '@/components/BackTop';
import SiteFooter from '@/components/SiteFooter';
import SiteNavbar from '@/components/SiteNavbar';
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
                <link rel="stylesheet" href="https://cdn.bootcss.com/animate.css/3.7.2/animate.min.css" />
            </head>
            <body className='site_wrapper'>
                <SiteNavbar />
                <Providers>
                    <div>
                        {children}
                    </div>
                </Providers>
                <Toaster />
                <BackTop />
                <SiteFooter />
            </body>
        </html>
    );
}
