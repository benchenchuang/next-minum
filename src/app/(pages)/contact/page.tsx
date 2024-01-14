/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-30 16:22:39
 * @LastEditTime: 2024-01-14 11:53:46
 * @FilePath: /minum-website/src/app/(pages)/contact/page.tsx
 */
import React from 'react'
import { Metadata } from 'next'
import BannerShow from '@/components/BannerShow'

export const metadata: Metadata = {
    title: "联系我们"
}

const Contact = () => {
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
            <BannerShow {...banner} />
        </>
    )
}

export default Contact