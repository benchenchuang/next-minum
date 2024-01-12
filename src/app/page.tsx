/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-12 20:02:00
 * @FilePath: /minum-website/src/app/page.tsx
 */
import type { Metadata } from 'next'
import '@/styles/global.css'
import '@/styles/animate.css'
import { siteConfig } from '@/config/site';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import BackTop from '@/components/BackTop';
import BannerShow from '@/components/BannerShow';
import HomeSummarize from './(pages)/_components/home_summarize';
import ProductIntroduction from './(pages)/_components/product_introduction';
import ProductDesign from './(pages)/_components/product_design';

export default function Home() {
    return (
        <div>
            <SiteNavbar />
            <div className='sm:-mt-10 md:-mt-20'>
                <BannerShow isImage={false} />
                <HomeSummarize />
                <ProductIntroduction />
                <ProductDesign />
            </div>
            <BackTop />
            <SiteFooter />
        </div>
    );
}
