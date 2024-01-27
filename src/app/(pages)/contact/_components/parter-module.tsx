/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-14 12:59:16
 * @LastEditTime: 2024-01-27 17:09:49
 * @FilePath: /minum-website/src/app/(pages)/contact/_components/parter-module.tsx
 */
'use client';
import React from 'react'
import BlockHeader from '@/components/BlockHeader'
import { Image } from "@nextui-org/react";

const ParterModule = () => {
    let header = {
        title: '合作伙伴',
        en_title: 'ENTERPRISE PARTNER',
        color: '#fff'
    }
    const partnerList = [
        {
            image:'/images/contact/partner/huawei.png',
            name:'华为'
        },
        {
            image:'/images/contact/partner/scend.png',
            name:'Ascend'
        },
        {
            image:'/images/contact/partner/kunpeng.png',
            name:'kunpeng'
        },
        {
            image:'/images/contact/partner/union_tech_soft.png',
            name:'统信软件技术有限公司'
        },
        {
            image:'/images/contact/partner/bff_soft.png',
            name:'讯软科技'
        },
        {
            image:'/images/contact/partner/cz_university.png',
            name:'常州大学'
        },
        {
            image:'/images/contact/partner/centuray.png',
            name:'信承瑞'
        },
        {
            image:'/images/contact/partner/long_tech.png',
            name:'long-tech'
        },
        {
            image:'/images/contact/partner/cloud_gz.png',
            name:'云上贵州'
        },
        {
            image:'/images/contact/partner/national_health.png',
            name:'国家健康医疗大数据（东部）中心'
        },
        {
            image:'/images/contact/partner/js_rural_bank.png',
            name:'江苏农村商业银行'
        },
        {
            image:'/images/contact/partner/zs_university.png',
            name:'中山大学'
        }
    ]
    return (
        <div className='relative sm:py-[30px] md:py-[50px] xl:py-[80px] overflow-hidden'>
            <div className='relative z-20'>
                <BlockHeader {...header} />
                <div className='max-w-[1100px] mx-auto sm:pt-[30px] md:pt-[50px] xl:pt-[90px] grid grid-flow-dense grid-cols-3 sm:gap-y-4 md:gap-y-8 xl:gap-y-16'>
                    {
                        partnerList.map((item,key)=>{
                            return (
                                <div key={key}
                                    className={`wow bounceIn hover:scale-90 transition-all flex flex-col justify-center items-center ${(key+1)%3!=0 && 'border-[#aaa] border-r-[1px]'} md:max-h-[30px] xl:max-h-[80px]`}>
                                    <Image className='sm:max-w-24 md:max-h-[30px] md:max-w-44 xl:max-w-48 xl:max-h-[80px]' src={item.image} alt={'大道云隐-'+item.name} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='bg-[#000000] bg-opacity-45 absolute left-0 bottom-0 z-10 right-0 top-0'></div>
            <div className='absolute left-0 bottom-0 z-0 top-0 right-0 h-full w-full'>
                <Image className='w-screen' radius="none" src="/images/contact/parter_bg.png" alt="大道云隐-合作伙伴" />
            </div>
        </div>
    )
}

export default ParterModule