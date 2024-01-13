/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-07 10:51:09
 * @LastEditTime: 2024-01-13 23:17:25
 * @FilePath: /minum-website/src/app/(pages)/support/page.tsx
 */
import React from 'react'
import { Metadata } from 'next'
import BannerShow from '@/components/BannerShow'
import SupportForm from './_components/form'

export const metadata: Metadata = {
    title: "服务支持"
}

const Support = () => {
    let banner = {
        bgColor: '#0d1943',
        textColor: 'text-white',
        title: '产品咨询',
        imagePath: '/images/support/banner_bg.png',
    };
    
    return (
        <div>
            <BannerShow {...banner} />
            <div className='max-w-[820px] flex flex-col mx-auto my-[100px]'>
                <SupportForm />
            </div>
        </div>
    )
}

export default Support