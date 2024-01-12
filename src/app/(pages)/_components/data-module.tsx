/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-12 22:50:52
 * @LastEditTime: 2024-01-12 22:52:13
 * @FilePath: /minum-website/src/app/(pages)/_components/data-module.tsx
 */
import BlockHeader from '@/components/BlockHeader'
import React from 'react'

const DataModule = () => {
    let header = {
        title: '模块',
        en_title: 'module'
    }
    return (
        <div className='bg-[#F5F8FC] sm:py-[50px] md:py-[100px] relative'>
            <BlockHeader {...header} />
        </div>
    )
}

export default DataModule