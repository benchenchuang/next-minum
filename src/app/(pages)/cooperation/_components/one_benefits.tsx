/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-15 22:56:53
 * @LastEditTime: 2024-01-17 21:47:03
 * @FilePath: /minum-website/src/app/(pages)/cooperation/_components/one_benefits.tsx
 */
import React from 'react'
import BlockHeader from '@/components/BlockHeader'
import { Image } from "@nextui-org/react";

const OneBenefits = () => {
    let header = {
        title: '企业收益',
        en_title: 'Business Benefits'
    }
    const list = [
        {
            icon:'/images/cooperate/one/benefits/header_ability.png',
            name:'获取能力',
            children:[
                {
                    name:'数据资产管理',
                    icon:'/images/cooperate/one/benefits/ability_01.svg'
                },
                {
                    name:'数据资产保护',
                    icon:'/images/cooperate/one/benefits/ability_02.svg'
                },
                {
                    name:'数据资产利用',
                    icon:'/images/cooperate/one/benefits/ability_03.svg'
                }
            ]
        },
        {
            icon:'/images/cooperate/one/benefits/header_cost.png',
            name:'降低成本',
            children:[
                {
                    name:'网盘产品',
                    icon:'/images/cooperate/one/benefits/cost_01.svg'
                },
                {
                    name:'DLP产品',
                    icon:'/images/cooperate/one/benefits/cost_02.svg'
                },
                {
                    name:'数据自动化产品',
                    icon:'/images/cooperate/one/benefits/cost_03.svg'
                },
                {
                    name:'数据治理产品',
                    icon:'/images/cooperate/one/benefits/cost_04.svg'
                },
                {
                    name:'风控预警产品',
                    icon:'/images/cooperate/one/benefits/cost_05.svg'
                },
                {
                    name:'社交安全产品',
                    icon:'/images/cooperate/one/benefits/cost_06.svg'
                },
                {
                    name:'外发安全产品',
                    icon:'/images/cooperate/one/benefits/cost_07.svg'
                }
            ]
        },
        {
            icon:'/images/cooperate/one/benefits/header_promote.png',
            name:'提升效能',
            children:[
                {
                    name:'工作效率提升',
                    icon:'/images/cooperate/one/benefits/promote_01.svg'
                },
                {
                    name:'风险预防',
                    icon:'/images/cooperate/one/benefits/promote_02.svg'
                },
                {
                    name:'员工专注度增强',
                    icon:'/images/cooperate/one/benefits/promote_03.svg'
                },
                {
                    name:'管理复杂度降低',
                    icon:'/images/cooperate/one/benefits/promote_04.svg'
                }
            ]
        }
    ]
    return (
        <div className='bg-white sm:py-[50px] md:py-[100px] relative'>
            <BlockHeader {...header} />
            <div className='relative z-10 max-w-[1200px] sm:pt-[40px] lg:pt-[80px] grid sm:grid-cols-1 lg:grid-cols-3 sm:mx-8 sm:gap-6 lg:mx-6 xl:mx-auto lg:gap-6 xl:gap-20'>
                {
                    list.map((header,key)=>{
                        return(
                            <div
                                className='wow flipInY bg-white flex flex-col border border-[#DFEAF7] shadow-[0_2px_4px_rgba(0,6,20,0.15)]'
                                key={key}>
                                <div className='bg-benefit-header flex flex-row items-center px-7 md:h-[70px]'>
                                    <span className='flex-1 text-white border-l-4 border-white pl-3 leading-7 text-[30px]'>{header.name}</span>
                                    <Image src={header.icon} alt={header.name}/>
                                </div>
                                <div className='p-[10px] flex-1 flex flex-col gap-2'>
                                    {
                                        header.children.map((item,index)=>{
                                            return(
                                                <div
                                                    className='flex-1 min-h-[60px] pl-12 flex flex-row items-center bg-[#E4EDF7]'
                                                    key={index}>
                                                    <Image radius='none' src={item.icon} alt={header.name+'-'+item.name}/>
                                                    <span className='text-[#576880] font-[400] lg:text-[20px] xl:text-[24px] sm:ml-3 xl:ml-5'>{item.name}</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
 
export default OneBenefits