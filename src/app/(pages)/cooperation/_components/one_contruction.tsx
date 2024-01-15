/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-14 20:25:32
 * @LastEditTime: 2024-01-15 23:12:06
 * @FilePath: /minum-website/src/app/(pages)/cooperation/_components/one_contruction.tsx
 */
import React, { useState } from 'react'
import { Image } from "@nextui-org/react";

const OneConstruction = () => {
    const [active,setActive] = useState<number>()
    const list = [
        {
            icon:'/images/cooperate/one/water.png',
            activeIcon:'/images/cooperate/one/water_active.png',
            bgPath:'/images/cooperate/one/construction_water_bg.png',
            content:'专注于水处理膜、<br/>新能源膜、<br/>生物科技膜处理'
        },
        {
            icon:'/images/cooperate/one/environment.png',
            activeIcon:'/images/cooperate/one/environment_active.png',
            bgPath:'/images/cooperate/one/construction_environment_bg.png',
            content:'创新环保科技领军者'
        },
        {
            icon:'/images/cooperate/one/global.png',
            activeIcon:'/images/cooperate/one/global_acive.png',
            bgPath:'/images/cooperate/one/construction_global_bg.png',
            content:'拥有国际领先的<br/>膜分离研发及制造技术'
        }
    ]
    return (
        <div className='max-w-[1200px] mx-auto box-border sm:my-[50px] md:my-[70px] lg:my-[100px] grid grid-flow-dense sm:grid-cols-1 md:grid-cols-3 sm:px-6 md:px-6 xl:px-0 sm:gap-y-6 md:gap-y-0 md:gap-x-8 xl:gap-x-36'>
            {
                list.map((item,key)=>{
                    return (
                        <div
                            key={key}
                            onMouseEnter={()=>setActive(key)}
                            onMouseLeave={()=>setActive(-1)}
                            className={`wow fadeInUp
                            bg-[#FAFCFF] relative cursor-pointer rounded-[10px] transition-all
                            ${active==key?'text-white':'text-[#333] border border-[#BBD4F0]'}
                            md:px-8 lg:px-12
                            `}>
                            <div className='relative z-10 flex flex-col items-center text-center'>
                                <div className='sm:h-20 md:h-auto sm:mt-20 md:mt-[44px] lg:mt-[50px]'>
                                    {
                                        active==key?(<Image className={`${key===active && 'animate-bounceOne'}`} src={item.activeIcon} alt={item.content}/>):(
                                            <Image src={item.icon} alt={item.content}/>
                                        )
                                    }
                                </div>
                                <p 
                                    className='flex flex-row items-center md:text-[14px] lg:text-[18px] xl:text-[20px] sm:mt-20 md:mt-10 sm:mb-28 md:mb-12 lg:mb-20 sm:h-8 lg:h-20'
                                    dangerouslySetInnerHTML={{__html: item.content}}></p>
                            </div>
                            {
                                active==key && (
                                    <div className='absolute left-0 top-0 z-0 right-0 bottom-0'>
                                        <img className='w-full' src={item.bgPath} alt={item.content} />
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OneConstruction