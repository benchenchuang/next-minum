/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-11 21:10:19
 * @LastEditTime: 2024-01-11 23:03:42
 * @FilePath: /minum-website/src/app/_components/product_design.tsx
 */
'use client'
import React, { useState } from 'react'
import BlockHeader from '@/components/BlockHeader'
import { Image } from "@nextui-org/react";

const ProductDesign = () => {
    const [activeKey,setActiveKey] = useState<number>()
    let header = {
        title: '当前痛点',
        en_title: 'Product Design'
    }
    let designList = [
        {
            icon:'/images/home/design_assets.png',
            name:'资产盘点',
            detail:'多为结构化盘点<br/>非结构化能力缺失'
        },
        {
            icon:'/images/home/design_sort.png',
            name:'数据分类分级',
            detail:'结构化为主、<br/>人工标注为主<br/>核心数据保护不足<br/>非核心数据重点保护'
        },
        {
            icon:'/images/home/design_security.png',
            name:'数据安全风险评估',
            detail:'围绕网络等保居多<br/>缺少数据安全视角'
        },
        {
            icon:'/images/home/design_protect.png',
            name:'数据外发保护',
            detail:'传统DLP加壳保护<br/> 安全边界有限'
        },
        {
            icon:'/images/home/design_rule.png',
            name:'合规运营',
            detail:'数据安全法、个保法、<br/> GDPR等合规监测<br/> 违规通报，反补业务'
        }
    ]

    const focusItem = (key:number)=>{
        console.log(key)
        setActiveKey(key)
    }

    return (
        <div className='bg-[#F5F8FC] sm:py-[50px] md:py-[100px] relative'>
            <BlockHeader {...header} />
            <div className='max-w-[1241px] mx-auto sm:pt-[50px] md:pt-[70px]'>
                <div className='grid grid-cols-5 gap-4 pr-12'>
                    {
                        designList.map((item,key)=>{
                            return (
                                <div className={`wow zoomInUp cursor-pointer text-center flex flex-col items-center mx-[20px]`} onMouseEnter={()=>focusItem(key)} key={key}>
                                    <div className={`h-[118px] ${key==activeKey && 'animate-bounceOne'}`}>
                                        <Image src={item.icon} alt='大道云隐-当前痛点' />
                                    </div>
                                    <h3 className='text-[#153E8B] mt-[20px] text-[20px] font-[500]'>{item.name}</h3>
                                    <p className='text-[#666] mt-[30px] text-[18px] font-[400]' dangerouslySetInnerHTML={{__html: item.detail}}></p>
                                </div>
                            )
                        })
                    }
                </div>
                <Image src='/images/home/design_module_bg.png' alt='大道云隐-当前痛点' />
            </div>
            <div className='absolute left-0 bottom-0 right-0 w-screen'>
                <Image src="/images/home/design_bg.png" alt="大道云隐-当前痛点" />
            </div>
        </div>
    )
}

export default ProductDesign