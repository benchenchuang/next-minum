/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-13 20:41:07
 * @FilePath: /minum-website/src/app/page.tsx
 */
'use client'
import '@/styles/global.css'
import '@/styles/animate.css'
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';
import BackTop from '@/components/BackTop';
import BannerShow from '@/components/BannerShow';
import HomeSummarize from './(pages)/_components/home_summarize';
import ProductIntroduction from './(pages)/_components/product_introduction';
import ProductDesign from './(pages)/_components/product_design';
import DataSafe from './(pages)/_components/data-safe';
import DataModule from './(pages)/_components/data-module';
import ModuleDiagram from './(pages)/_components/module-diagram';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
    const searchParams = useSearchParams()
    useEffect(() => {
        let type = searchParams.get('type');
        if (type) {
            scrollToAnchor();
        }
    }, [searchParams])
    const scrollToAnchor = () => {
        const targetElement = document.getElementById('product_introduction');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error("未找到指定的标签");
        }
    };
    return (
        <div>
            <SiteNavbar />
            <div className='sm:-mt-10 md:-mt-20'>
                <BannerShow isImage={false} />
                <HomeSummarize />
                <div id='product_introduction'></div>
                <ProductIntroduction />
                <ProductDesign />
                <DataSafe />
                <DataModule />
                <ModuleDiagram />
            </div>
            <BackTop />
            <SiteFooter />
        </div>
    );
}
