import React from 'react'
import { Metadata } from 'next'
import BannerShow from '@/components/BannerShow'
import PageWrap from './_components/page_wrap'

export const metadata: Metadata = {
    title: "合作案例"
}

const Cooperation = () => {
    const banner = {
        bgColor: '#0d1943',
        textColor: 'text-white',
        imagePath: '/images/cooperate/banner_bg.png',
        position:'items-center',
    }
    return (
        <div>
            <BannerShow {...banner} />
            <PageWrap/>
        </div>
    )
}

export default Cooperation