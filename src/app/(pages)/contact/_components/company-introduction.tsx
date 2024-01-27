/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-14 12:20:38
 * @LastEditTime: 2024-01-27 19:19:44
 * @FilePath: /minum-website/src/app/(pages)/contact/_components/company-introduction.tsx
 */
'use client'
import React, { useState } from 'react'
import BlockHeader from '@/components/BlockHeader'
import { Image } from '@nextui-org/react'

const CompanyIntroduction = () => {
    let header = {
        title: '企业介绍',
        en_title: 'ENTERPRISE INTRODUCTION'
    }
    const [active,setActive] = useState<string>('introduction')
    const tabList = [
        {
            image:'',
            name:'企业简介',
            type:'introduction'
        },
        {
            image:'',
            name:'发展与未来',
            type:'develop'
        },
        {
            image:'',
            name:'商业布局和拓展',
            type:'layout'
        }
    ]

    return (
        <div className='bg-[#fff] relative sm:py-[25px] md:py-[50px]'>
            <BlockHeader {...header} />
            <div className='max-w-[1200px] mx-auto sm:pt-[25px] md:pt-[50px]'>
                <div className='flex flex-row justify-center sm:gap-8 md:gap-40'>
                    {
                        tabList.map(item=>{
                            return (
                                <div
                                    key={item.type}
                                    className=''
                                    onClick={()=>setActive(item.type)}>
                                    {/* <Image src={item.image} alt={item.name}/> */}
                                    <p className={`pb-[2px] ${active==item.type?'border-b-[3px] border-[#153E8B] text-[#153E8B]':'text-[#666]'} cursor-pointer sm:text-[14px] md:text-[20px]`}>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {/* 企业简介 */}
                <div className='max-w-[1200px] sm:pt-[50px] md:pt-[60px] flex sm:flex-col md:flex-row sm:mx-[30px] xl:mx-auto'>
                    <Image className='md:w-[280px] lg:w-full' radius='none' src='/images/contact/company.png' alt='江苏大道云隐科技有限公司'/>
                    <div className='flex-1 flex flex-col sm:ml-0 sm:mt-[20px] md:mt-0 md:ml-[30px] lg:ml-[50px] justify-between'>
                        <div className='text-[#333] font-[400] leading-8 md:text-[13px] lg:text-[16px]'>
                            <p className='indent-8 '>江苏大道云隐科技有限公司是一家专业聚焦人工智能和数据安全的研发型企业，拥有领先的基于AI的数据安全治理产品及解决方案。</p>
                            <p className='indent-8'>大道云隐旗下数据安全产品『密数云』围绕数据价值提供持久化的数据保护、数据合规性服务，帮助用户更快、更智能地发现、管理和保护核心数据，隔绝数据泄露风险。</p>
                        </div>
                        <div className='text-[#333] flex flex-col sm:mt-4 md:mt-0 sm:gap-4 md:gap-3 md:mt-4 lg:gap-12'>
                            <div className='flex flex-row items-center leading-6'>
                                <span className='sm:w-[100px] lg:w-[120px] font-[500] mr-4 pr-4 border-r-2 border-[#333] md:text-[16px] lg:text-[20px]'>使&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;命</span>
                                <span className='font-[400] sm:text-[13px] md:text-[14px] lg:text-[16px]'>为用户提供最可靠的数据安全保障</span>
                            </div>
                            <div className='flex flex-row items-center leading-6'>
                                <span className='sm:w-[100px] lg:w-[120px] font-[500] mr-4 pr-4 border-r-2 border-[#333] md:text-[16px] lg:text-[20px]'>愿&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;景</span>
                                <span className='font-[400] sm:text-[13px] md:text-[14px] lg:text-[16px]'>成为国家数据安全的基石</span>
                            </div>
                            <div className='flex flex-row items-center leading-6'>
                                <span className='sm:w-[100px] lg:w-[120px] font-[500] mr-4 pr-4 border-r-2 border-[#333] md:text-[16px] lg:text-[20px]'>核心价值观</span>
                                <span className='font-[400] sm:text-[13px] md:text-[14px] lg:text-[16px]'>用户至上&nbsp;&nbsp;坦诚相待&nbsp;&nbsp;追求极致&nbsp;&nbsp;和衷共济</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CompanyIntroduction