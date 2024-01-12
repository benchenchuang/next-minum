/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-12 20:32:45
 * @LastEditTime: 2024-01-12 23:06:03
 * @FilePath: /minum-website/src/app/(pages)/_components/data-safe.tsx
 */
import React from 'react'
import BlockHeader from '@/components/BlockHeader'
import { Image } from "@nextui-org/react";

const DataSafe = () => {
    let header = {
        title: '数据安全管理',
        en_title: 'Product Introduction'
    }
    const introList = [
        {
            icon:'/images/home/design_rule.png',
            name:'数据资产发现',
            detail:'资产发现<br/>安全风险评估<br/>分类分级'
        },
        {
            icon:'/images/home/design_rule.png',
            name:'文档管理',
            detail:'数据同步<br/>企业网盘<br/>安全协作'
        },
        {
            icon:'/images/home/design_rule.png',
            name:'数据防泄露',
            detail:'内部管控<br/>外发保护<br/>社交保护'
        },
        {
            icon:'/images/home/design_rule.png',
            name:'数据灾备',
            detail:'数据备份<br/>数据恢复<br/>数据防勒索'
        }
    ]
    return (
        <div className='bg-[#fff] relative sm:py-[50px] md:py-[100px]'>
            <BlockHeader {...header} />
            <div className='max-w-[1241px] mx-auto sm:pt-[50px] md:pt-[70px] grid sm:mx-[30px] md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    introList.map((item,key)=>{
                        return (
                            <div className={`wow fadeInUp cursor-pointer text-center flex flex-col items-center py-[50px] border-white border-b-5 transition hover:border-[#153e8b] hover:bg-card-module `}key={key}>
                                <div className={`sm:h-[88px] md:h-[108px] lg:h-[118px]}`}>
                                    <Image src={item.icon} alt='大道云隐-数据安全管理' />
                                </div>
                                <h3 className='text-[#153E8B] mt-[30px] md:text-[18px] lg:text-[24px] font-[500]'>{item.name}</h3>
                                <p className='text-[#888] md:mt-[15px] lg:mt-[20px] md:text-[14px] lg:text-[20px] font-[300]' dangerouslySetInnerHTML={{__html: item.detail}}></p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DataSafe