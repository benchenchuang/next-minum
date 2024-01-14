/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-14 10:33:46
 * @LastEditTime: 2024-01-14 11:00:32
 * @FilePath: /minum-website/src/app/(pages)/honor/page.tsx
 */
import React from 'react'
import BannerShow from '@/components/BannerShow'

const Honor = () => {
    const banner = {
        bgColor: '#0d1943',
        textColor: 'text-[#333]',
        title: '大道云隐',
        position:'top-1/4',
        subTitle: '新一代数据资产安全保护引领者',
        imagePath: '/images/honor/banner_bg.png',
        description: '新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障'
    }
    return (
        <div className='sm:-mt-10 md:-mt-20'>
            <BannerShow {...banner} />
        </div>
    )
}

export default Honor