/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-13 10:50:35
 * @LastEditTime: 2024-01-13 19:39:22
 * @FilePath: /minum-website/src/app/(pages)/_components/module-diagram.tsx
 */
'use client'
import React, { useState } from 'react'
import BlockHeader from '@/components/BlockHeader'
import { Image } from "@nextui-org/react";

const ModuleDiagram = () => {
    const [active,setActive] = useState<string>('data-find')
    let header = {
        title: '模块架构',
        en_title: 'Module architecture diagram',
        color: '#fff'
    }
    const diagramTypeList = [
        {
            name:'数据资产发现',
            value:'data-find'
        },
        {
            name:'文档管理',
            value:'file-manage'
        },
        {
            name:'数据防泄密修改',
            value:'data-leak'
        },
        {
            name:'数据灾备',
            value:'data-damage'
        }
    ]
    return (
        <div className='bg-diagram-module relative sm:py-[25px] md:py-[50px] overflow-y-hidden'>
            <BlockHeader {...header} />
            <div className='relative z-10 max-w-[1200px] mx-auto sm:pt-[50px] md:pt-[80px]'>
                <div className='flex flex-row  md:gap-24 lg:gap-36 border-[#304782] border-b-[3px] rounded-[4px] sm:px-4 xl:px-0 box-border'>
                    {
                        diagramTypeList.map(item=>{
                            return (
                                active==item.value?(
                                    <div className={`flex-1 relative cursor-pointer pb-[18px] text-center sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] text-white font-[700] after:content-[''] after:absolute after:left-0 after:-bottom-[3px] after:right-0 after:border-[#8CB0ED] after:border-b-[3px] after:rounded-[4px]`}
                                        key={item.value}>
                                            {item.name}
                                        <div className="absolute left-1/2 translate-x-[-50%] bottom-0 border-solid border-b-[#8CB0ED] border-b-8 border-x-transparent border-x-5 border-t-0"></div>
                                    </div>
                                ):(
                                    <div className={`flex-1 cursor-pointer pb-[18px] text-center text-[#ADB6CC] sm:text-[10px] md:text-[14px] lg:text-[18px] xl:text-[20px] font-[500]`} key={item.value} onClick={()=>setActive(item.value)}>{item.name}</div>
                                )
                            )
                        })
                    }
                </div>
            </div>
            <div className='absolute left-0 bottom-0 z-0 right-0 w-screen opacity-20'>
                <Image src="/images/home/diagram_bg.png" alt="大道云隐-模块架构" />
            </div>
        </div>
    )
}

export default ModuleDiagram