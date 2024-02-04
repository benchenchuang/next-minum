/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-04 10:40:27
 * @LastEditTime: 2024-02-04 15:04:28
 * @FilePath: /minum-website/src/app/(pages)/product/_components/msy.tsx
 */
'use client';
import { Image } from '@nextui-org/react'
import React, { useState } from 'react'

const MSYModule = () => {
    const [activeKey,setActiveKey] = useState<number>()
    const focusItem = (key:number)=>{
        setActiveKey(key)
    }
    const serviceList = [
        {
            path:'/images/product/msy/find.png',
            name:'数据发现',
            describe:"终端.企业NAS...."
        },
        {
            path:'/images/product/msy/protect.svg',
            name:'数据保护',
            describe:"持久化保护  智能分类分级<br/>数据合规   数据实时溯源"
        },
        {
            path:'/images/product/msy/use.svg',
            name:'数据使用',
            describe:"内容合规  内容脱敏<br/>协作安全  动态权限."
        },
        {
            path:'/images/product/msy/value.svg',
            name:'数据价值',
            describe:"内容生成  BI生成<br/>数字助理  知识助手"
        }
    ]
  return (
    <div className='bg-[#fff] relative overflow-hidden'>
        <div className='relative z-10'>
            <div className='max-w-[1200px] flex flex-col items-center md:mx-auto sm:py-[50px] md:pt-[70px]'>
                <Image className='wow zoomInUp lg:w-[200px] xl:w-[304px]' src='/images/home/msy_logo.svg' alt='密数云'/>
                <p className='wow slideInLeft text=[#666] font-[400px] tracking-[16px] mt-7 text-[18px]'>数据资产全生命周期保护</p>
            </div>

            <div className='max-w-[1200px] grid grid-flow-dense
                 sm:mx-10 md:mx-8 lg:mx-6 xl:mx-auto
                 md:my-[40px]
                 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                 sm:gap-y-4
                 md:gap-x-4 xl:gap-x-4'>
                {
                    serviceList.map((item,key)=>{
                        return (
                            <div
                                className={`wow slideInUp flex flex-col items-center transition-all rounded-[8px] pt-[60px] pb-[32px]
                                    bg-msy_module_bg ${key==activeKey && 'bg-msy_active_module'}`}
                                key={key}
                                onMouseEnter={()=>focusItem(key)} onMouseLeave={()=>focusItem(-1)} >
                                    <Image className='max-w-[176px]' src={item.path} alt={item.name}/>
                                    <h3 className={`
                                         text-[36px] mt-[40px]
                                        ${key==activeKey?'text-white':'text-[#383838]'}
                                    `}>{item.name}</h3>
                                    <p 
                                        className={`
                                        text-center mt-2 text-[16px]
                                        ${key==activeKey?'text-[#E5E5E5]':'text-[#A6A6A6]'}
                                        `}
                                        dangerouslySetInnerHTML={{__html: item.describe}}></p>
                            </div>
                        )
                    })
                }
            </div>
            
            <div className='max-w-[1200px] sm:mx-10 md:mx-10 lg:mx-6 xl:mx-auto sm:mt-[70px] md:mt-[100px] lg:mt-[260px] sm:mb-[50px] md:mb-[80px] lg:mb-[120px]'>
                <h3 className="text-[#333] border-[#153E8B] text-[30px] pl-[10px] border-l-[6px] leading-7">密数云</h3>
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
                        <p className='font-[500] mb-2'>针对传统安全解决方案的缺陷：</p>
                        <p>无法全面资产盘点、人工分类分级、无法对涉密、敏感内容进行动态权限管理、改变操作习惯，降低日常工作效率、核心数据保护不足，非核心数据过度保护、企业外发无法跨平台、跨产品，无法溯源、无有效风控...</p>
                    </div>
                    <div className='wow fadeInRight sm:mt-4'>
                        <p className='font-[500] mb-2'>密数云提出在无感深入业务的前提下，提出下一代的非结构化资产管理的价值主张，涵盖：</p>
                        <p>资产盘点、智能分类分级、内容识别管控，动态权限、全流程溯源、全平台外发，跨产品外发、数据合规、安全运营...</p>
                    </div>
                </div>
            </div>
        </div>
        

        <div className='absolute left-0 right-0 sm:top-3/4 md:top-2/3 lg:top-2/4 z-0'>
            <Image src='/images/product/main_bg.png' alt='密数云'/>
        </div>
    </div>
  )
}

export default MSYModule