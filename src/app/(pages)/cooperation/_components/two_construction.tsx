/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-18 19:55:02
 * @LastEditTime: 2024-01-18 20:14:06
 * @FilePath: /minum-website/src/app/(pages)/cooperation/_components/two_construction.tsx
 */
'use client'
import { Image } from '@nextui-org/react'
import React, { useState } from 'react'

const TwoConstruction = () => {
    const [active,setActive] = useState<number>()
    const list = [
        {
            icon:'/images/cooperate/two/construction_01.svg',
            label:'为国家电网、省网、<br/>铁路系统提供各类<br/>高压、超高压电缆'
        },
        {
            icon:'/images/cooperate/two/construction_02.svg',
            label:'越南国家电网、<br/>新加坡人工岛电力项目'
        },
        {
            icon:'/images/cooperate/two/construction_03.svg',
            label:'自主研发生产轨道<br/>交通接触网线材'
        },
        {
            icon:'/images/cooperate/two/construction_04.svg',
            label:'国际领先的材料技术'
        }
    ]
    return (
        <div className='max-w-[1200px] mx-auto box-border sm:my-[50px] md:my-[70px] lg:my-[100px] grid grid-flow-dense sm:grid-cols-2 md:grid-cols-4 sm:px-6 md:px-6 xl:px-0 sm:gap-y-6 md:gap-y-0 md:gap-x-8 xl:gap-x-36'>
            {
                list.map((item,key)=>{
                    return (
                        <div className='wow fadeInUp flex flex-col items-center' key={key} onMouseEnter={()=>setActive(key)}
                        onMouseLeave={()=>setActive(-1)}>
                            <div className='
                                bg-[#E1EDFA] cursor-pointer flex flex-col justify-center items-center border-white rounded-full
                                border-[20px]  shadow-lg sm:w-[100px] sm:h-[100px] xl:w-[140px] xl:h-[140px] '>
                                <Image className={`${key===active && 'animate-bounceOne'} sm:w-8 xl:w-12`} radius='none' src={item.icon} alt={item.label}/>
                            </div>
                            <p
                                className='
                                    text-center text-[#333]
                                    mt-5 sm:text-[14px] xl:text-[16px]'
                                dangerouslySetInnerHTML={{__html: item.label}}></p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TwoConstruction