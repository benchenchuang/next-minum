/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-04 10:40:27
 * @LastEditTime: 2024-02-04 15:48:21
 * @FilePath: /minum-website/src/app/(pages)/product/_components/mssk.tsx
 */
'use client';
import { Image } from '@nextui-org/react'
import React, { useState } from 'react'

const MSSKModule = () => {
    const [activeKey,setActiveKey] = useState<number>()
    const focusItem = (key:number)=>{
        setActiveKey(key)
    }
    const serviceList = [
        {
            path:'/images/product/mssk/01.png',
            name:'为企业提供精准的数据服务'
        },
        {
            path:'/images/product/mssk/02.png',
            name:'数据资产的精细化管理'
        },
        {
            path:'/images/product/mssk/03.png',
            name:'减少数据安全风险'
        },
        {
            path:'/images/product/mssk/04.png',
            name:'规范安全防护措施'
        },{
            path:'/images/product/mssk/05.png',
            name:'促进数据开放共享'
        },
        {
            path:'/images/product/mssk/06.png',
            name:'厘清数据资产'
        },
    ]
  return (
    <div className='bg-[#fff] relative overflow-hidden'>
        <div className='relative z-10'>
            <div className='max-w-[1200px] flex flex-col items-center md:mx-auto sm:py-[50px] md:pt-[70px]'>
                <Image className='wow zoomInUp md:w-[200px] xl:w-[304px]' src='/images/home/mssk_logo.svg' alt='密数四库'/>
                <p className='wow slideInLeft text=[#666] font-[400px] tracking-[16px] mt-7 sm:text-[14px] md:text-[18px]'>基于人工智能的数据资产治理</p>
            </div>

            <div className='max-w-[1200px] grid grid-flow-dense
                 sm:mx-10 xl:mx-auto
                 md:my-[40px]
                 sm:grid-cols-1 md:grid-cols-2
                 sm:gap-y-4 md:gap-y-8
                 sm:gap-x-4 md:gap-x-8'>
                {
                    serviceList.map((item,key)=>{
                        return (
                            <div
                                className={`wow slideInUp relative flex flex-col items-center transition-all rounded-[8px] sm:h-[90px] sm:leading-[90px] md:h-[110px] md:leading-[110px]
                                    bg-msy_module_bg ${key==activeKey && 'bg-msy_active_module'}`}
                                key={key}
                                onMouseEnter={()=>focusItem(key)} onMouseLeave={()=>focusItem(-1)} >
                                    <h3 className={`
                                        relative z-10
                                        md:text-[20px] lg:text-[32px] xl:text-[36px] tracking-[4px]
                                        ${key==activeKey?'text-white':'text-[#383838]'}
                                    `}>{item.name}</h3>
                                    <div className={`absolute top-1/2 -translate-y-1/2 ${key==activeKey?'opacity-60':'opacity-100'}`}>
                                        <Image radius='none' src={item.path} alt={item.name}/>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
            
            <div className='max-w-[1200px] sm:mx-10 md:mx-10 lg:mx-6 xl:mx-auto sm:mt-[70px] md:mt-[100px] lg:mt-[260px] sm:mb-[50px] md:mb-[80px] lg:mb-[120px]'>
                <h3 className="text-[#333] border-[#153E8B] text-[30px] pl-[10px] border-l-[6px] leading-7">密数四库</h3>
                <div className='
                    mt-4
                    grid grid-flow-dense
                    text-[#666]
                    text-[18px]
                    leading-7
                    font-[400]
                    sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2
                    md:gap-x-0 lg:gap-x-[40px] xl:gap-x-[130px]
                '>
                    <div className='wow fadeInLeft'>
                        <p><span className='font-[500]'>效率：</span>算法可以快速、准确地处理大量数据，而人工分类分级通常需要花费更多的时间和人力。</p>
                    </div>
                    <div className='wow fadeInRight sm:mt-4 md:mt-0'>
                        <p><span className='font-[500]'>准确性：</span>算法基于预设规则和模式进行分类分级，可以减少人为错误和偏见，提高准确性。</p>
                        <p><span className='font-[500]'>可扩展性：</span>随着数据量的增加，算法可以自动适应并扩展分类分级的规模，而不需要增加人力成本。</p>
                    </div>
                </div>
            </div>
        </div>
        

        <div className='absolute left-0 right-0 sm:top-2/3 md:top-2/3 lg:top-2/4 z-0 sm:-mt-12 md:-mt-24 lg:mt-0'>
            <Image src='/images/product/main_bg.png' radius='none' alt='密数云'/>
        </div>
    </div>
  )
}

export default MSSKModule