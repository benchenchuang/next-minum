/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-28 11:46:43
 * @FilePath: /minum-website/src/app/page.tsx
 */
'use client'
import BannerShow from '@/components/BannerShow';
import HomeSummarize from './(pages)/_components/home_summarize';
import ProductIntroduction from './(pages)/_components/product_introduction';
import ProductDesign from './(pages)/_components/product_design';
import DataSafe from './(pages)/_components/data-safe';
import DataModule from './(pages)/_components/data-module';
import ModuleDiagram from './(pages)/_components/module-diagram';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import SiteNavbar from '@/components/SiteNavbar';
import SiteFooter from '@/components/SiteFooter';

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
    const banner = {
        bgColor: '#0d1943',
        textColor: 'text-white',
        title: '大道云隐',
        subTitle: '新一代数据资产安全保护引领者',
        videoPath: '/minum.mp4',
        position:'items-center',
        description: '新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障'
    }
    return (
        <>
            <SiteNavbar />
            <div className='sm:-mt-10 md:-mt-20'>
                <BannerShow {...banner} />
                <HomeSummarize />
                <div id='product_introduction'></div>
                <ProductIntroduction />
                <ProductDesign />
                <DataSafe />
                <DataModule />
                <ModuleDiagram />
            </div>
            <SiteFooter />
        </>
    );
}
