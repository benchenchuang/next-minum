/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-09 21:01:15
 * @LastEditTime: 2024-01-09 22:33:46
 * @FilePath: /minum-website/src/components/BlockHeader/index.tsx
 */
import React from 'react'
import { wowInit } from '@/libs/wow-init'

wowInit()
const CommonHeader = (props: any) => {
    let { color = "#333333", title = "", en_title = "" } = props;
    return (
        <div className={`text-center`} style={{ color: color }}>
            <h2 className='wow fadeInDown sm:text-[24px] md:text-[36px] font-[700] tracking-[3px]'>{title}</h2>
            <h3 className='wow fadeInUp sm:text-[13px] md:text-[18px] font-[500] mt-[5px] tracking-[5px]'>{en_title}</h3>
        </div>
    )
}

export default CommonHeader