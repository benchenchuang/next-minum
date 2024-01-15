/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-15 21:50:57
 * @LastEditTime: 2024-01-15 21:52:31
 * @FilePath: /minum-website/src/app/(pages)/cooperation/_components/one_points.tsx
 */
import BlockHeader from '@/components/BlockHeader'
import React from 'react'

const OnePoints = () => {
    let header = {
        title: '企业痛点',
        en_title: 'Enterprise Pain Points'
    }
    return (
        <div className='bg-[#F5F8FC] sm:py-[50px] md:py-[100px] relative'>
            <BlockHeader {...header} />
            <div className='relative z-10 max-w-[1241px] mx-auto sm:pt-[50px] md:pt-[70px] grid sm:mx-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            </div>
        </div>
    )
}

export default OnePoints