/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-14 12:20:38
 * @LastEditTime: 2024-02-04 17:45:09
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
            image:'/images/contact/icon_company.svg',
            imageOn:'/images/contact/icon_company_active.svg',
            name:'企业简介',
            type:'introduction'
        },
        {
            image:'/images/contact/icon_feature.svg',
            imageOn:'/images/contact/icon_feature_active.svg',
            name:'发展与未来',
            type:'develop'
        },
        {
            image:'/images/contact/icon_commerce.svg',
            imageOn:'/images/contact/icon_commerce_active.svg',
            name:'商业布局和拓展',
            type:'layout'
        }
    ]
    const developList = [
        {
            date:'2022.9.12',
            content:'与国家健康医疗大数据（东部）中心项目合作'
        },
        {
            date:'2022.12.30',
            content:'通过常州21批龙城英才'
        },
        {
            date:'2023.3.2',
            content:'通过信息安全体系认证通过隐私信息管理体系认证'
        },
        {
            date:'2023.3.30',
            content:'云上贵州贵阳大数据交易所合作'
        },
        {
            date:'2023.4.28',
            content:'入选“智改数转”服务商'
        },
        {
            date:'2023.5.16',
            content:'与江苏泷膜环境科技有限公司项目合作'
        },
        {
            date:'2023.6.27',
            content:'信承瑞技术有限公司项目合作'
        },
        {
            date:'2023.8.16',
            content:'中山大学项目方案交付'
        },
        {
            date:'2023.9.14',
            content:'大道云隐成为全国信息安全标准化技术委员会成员单位'
        },
        {
            date:'2023.10.19',
            content:'成立常州市数据安全创新中心'
        }
    ]

    const layoutList = [
        {
            date:"2024年01月",
            label:"密数系列产品标准化"
        },
        {
            date:"2024年03月",
            label:"可持续衡量价值模型"
        },
        {
            date:"2024年06月",
            label:"数据安全风控模型"
        },
        {
            date:"2024年08月",
            label:"基于FPGA的防勒索方案"
        },
        {
            date:"2024年10月",
            label:"结构化数据保护产品"
        },
        {
            date:"2025年06月",
            label:"DPU数据保护设备"
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
                                    className='flex flex-col justify-center items-center'
                                    onClick={()=>setActive(item.type)}>
                                        {
                                            active==item.type?<Image radius='none' src={item.imageOn} alt={item.name}/>:<Image radius='none' src={item.image} alt={item.name}/>
                                        }
                                    <p className={`pb-[2px] ${active==item.type?'border-b-[3px] border-[#153E8B] text-[#153E8B]':'text-[#666]'} cursor-pointer sm:text-[14px] md:text-[20px]`}>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {/* 企业简介 */}
                {
                    active=='introduction' && (
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

                    )
                }
                {/* 发展与未来*/}
                {
                    active=='develop' && (
                        <div className='max-w-[1400px] sm:pt-[50px] md:pt-[60px] lg:my-[100px] flex sm:flex-col md:flex-row sm:mx-[30px] xl:mx-auto'>
                            {/* 1024屏幕以上 */}
                            <div className='hidden lg:flex flex-row relative'>
                                {
                                    developList.map((item,index)=>{
                                        return index%2==1?(
                                            <div className='flex flex-col relative z-10 items-center lg:h-[208px] xl:h-[188px] text-center' key={index}>
                                                <p className='text-[#666] lg:h-[50px] xl:h-[40px] lg:text-[12px] xl:text-[14px] mb-3'>{item.content}</p>
                                                <span className='bg-module-active text-white w-[90px] rounded-full shadow-md text-[12px] h-[24px] leading-[24px]'>{item.date}</span>
                                                <span className='w-[12px] h-[12px] rounded-full border border-[#A6A6A6] mt-3 bg-white'></span>
                                            </div>
                                        ):(
                                            <div className='flex flex-col relative z-10 lg:h-[208px] xl:h-[188px] justify-end items-center text-center' key={index}>
                                                <span className='w-[12px] h-[12px] rounded-full border border-[#A6A6A6] mb-3 bg-white'></span>
                                                <span className='bg-module-active text-white w-[90px] rounded-full shadow-md text-[12px] h-[24px] leading-[24px]'>{item.date}</span>
                                                <p className='text-[#666] lg:h-[50px] xl:h-[40px] lg:text-[12px] xl:text-[14px] mt-3'>{item.content}</p>
                                            </div>
                                        )
                                    })
                                }
                                <span className='absolute left-0 top-[50%] z-0 right-0 h-[2px] bg-[#A6A6A6]'></span>
                            </div>
                            {/* 手机屏幕 */}
                            <div className='lg:hidden sm:flex flex-col w-full relative'>
                                {
                                    developList.map((item,index)=>{
                                        return (
                                            <div className='flex flex-col relative z-10 justify-end items-center text-center bg-white my-4 py-3' key={index}>
                                                {/* <span className='w-[12px] h-[12px] rounded-full border border-[#A6A6A6] mb-3 bg-white'></span> */}
                                                <span className='bg-module-active text-white w-[90px] rounded-full shadow-md text-[12px] h-[24px] leading-[24px]'>{item.date}</span>
                                                <p className='text-[#666] sm:text-[12px] mt-2'>{item.content}</p>
                                            </div>
                                        )
                                    })
                                }
                                <span className='absolute top-0 left-[50%] z-0 w-[2px] h-full bg-[#A6A6A6]'></span>
                            </div>
                        </div>
                    )
                }

                {/* 商业布局和拓展 */}
                {
                    active=='layout' && (
                        <div className='max-w-[1400px] sm:pt-[50px] relative md:pt-[60px] sm:mx-[30px] xl:mx-auto mb-20'>
                            <div className='sm:rotate-90 sm:mt-[150px] sm:-ml-[108px] md:-ml-0 md:mt-0 sm:absolute md:relative md:rotate-0'>
                                <Image className='sm:min-w-[540px]' radius='none' src='/images/contact/business_bg.png' alt='大道云隐商业布局和拓展'/>
                            </div>
                            <div className='relative z-10 flex sm:flex-col md:flex-row md:justify-around sm:gap-10 md:gap-2 lg:gap-6 xl:gap-20 md:-mx-4 xl:-mx-12 -mt-4'>
                                {
                                    layoutList.map((item,key)=>{
                                        return (
                                            <div
                                                className='text-center text-[#333] md:text-[13px] lg:text-[14px] xl:text-[16px]'
                                                key={key}>
                                                    <p>{item.date}</p>
                                                    <p>{item.label}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CompanyIntroduction