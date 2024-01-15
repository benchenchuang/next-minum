/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-15 22:56:53
 * @LastEditTime: 2024-01-15 22:57:18
 * @FilePath: /minum-website/src/app/(pages)/cooperation/_components/one_benefits.tsx
 */
import BlockHeader from '@/components/BlockHeader'
import React from 'react'

const OneBenefits = () => {
    let header = {
        title: '企业收益',
        en_title: 'Business Benefits'
    }
    return (
        <div className='bg-[#F5F8FC] sm:py-[50px] md:py-[100px] relative'>
            <BlockHeader {...header} />
            <div className='relative z-10 max-w-[1241px] mx-auto sm:pt-[50px] md:pt-[70px] grid sm:mx-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            </div>
        </div>
    )
}

export default OneBenefits