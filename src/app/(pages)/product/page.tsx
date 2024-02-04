/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-07 10:50:41
 * @LastEditTime: 2024-02-04 10:42:19
 * @FilePath: /minum-website/src/app/(pages)/product/page.tsx
 */
import React from 'react'
import { Metadata } from 'next'
import BannerShow from '@/components/BannerShow'
import PageWrap from './_components/page_wrap'

export const metadata: Metadata = {
    title: "产品介绍"
}

const Production = () => {
    const banner = {
        bgColor: '#0d1943',
        textColor: 'text-white',
        imagePath: '/images/product/banner_bg.png',
        position:'items-center',
    }

    return (
        <div>
            <BannerShow {...banner} />
            <PageWrap/>
        </div>
    )
}

export default Production