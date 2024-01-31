/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-14 10:33:46
 * @LastEditTime: 2024-01-31 22:03:57
 * @FilePath: /minum-website/src/app/(pages)/honor/page.tsx
 */
'use client'
import React, { useState } from 'react'
import BannerShow from '@/components/BannerShow'
import { Image } from '@nextui-org/react'

const Honor = () => {
    const banner = {
        bgColor: '#0d1943',
        textColor: 'text-[#333]',
        title: '大道云隐',
        position: 'top-1/4',
        subTitle: '新一代数据资产安全保护引领者',
        imagePath: '/images/honor/banner_bg.png',
        description: '新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障'
    }
    const [active, setActive] = useState<string>('qualifications')
    const tabList = [
        {
            name: '企业资质',
            type: 'qualifications'
        },
        {
            name: '企业荣誉',
            type: 'honor'
        },
        {
            name: '软件著作权',
            type: 'copyrights'
        }
    ]

    const qualificationList = [
        {
            image: '/images/honor/qualification-04.png.png',
            name: '多项软件著作权与专利',
            type: 'horizontal'
        },
        {
            image: '/images/honor/qualification-05.png.png',
            name: '云安全联盟大中华区成员单位',
            type: 'horizontal'
        },
        {
            image: '/images/honor/qualification-06.png.png',
            name: '获得符合国际标准的多项安全认证',
            type: 'horizontal'
        }
    ]
    const standardList = [
        '参与《数据分类分级实践指南》标准制订',
        '参与《认知数字疗法网络安全指南》标准制订',
        '参与《软件安全开发能力评估技术规范》标准制订',
        '参编《密码服务发展轨迹与趋势报告》',
    ]
    const honorList = [
        {
            image: '/images/honor/qualification-01.png.png',
            name: '进入贵州省云上贵州、常州市智改数转服务商名录',
            type: 'vertical'
        },
        {
            image: '/images/honor/qualification-02.png.png',
            name: '连续2年进入市级、省级医疗数据安全比赛决赛并获奖',
            type: 'vertical'
        },
        {
            image: '/images/honor/qualification-03.png.png',
            name: '全国信息安全标准化技术委员会成员单位',
            type: 'vertical'
        }
    ]
    const softwareList = [
        {
            image: '/images/honor/software/1.png',
        },
        {
            image: '/images/honor/software/2.png',
        },
        {
            image: '/images/honor/software/3.png',
        }, {
            image: '/images/honor/software/4.png',
        }
        , {
            image: '/images/honor/software/5.png',
        }, {
            image: '/images/honor/software/6.png',
        }, {
            image: '/images/honor/software/7.png',
        }
    ]

    return (
        <div className='sm:-mt-10 md:-mt-20'>
            <BannerShow {...banner} />
            <div className='sm:mt-[40px] md:mt-[90px]'>
                <div className='wow slideInUp border-[#F0F0F0] border-b-[3px]'>
                    <div className='max-w-[1200px] mx-auto flex flex-row justify-between'>
                        {
                            tabList.map(tab => {
                                return (
                                    active == tab.type ? <span className='text-center py-[10px] text-[#0D61A0] cursor-pointer border-[#0D61A0] border-b-[5px] w-[120px] sm:text-[18px] lg:text-[24px] font-[500]' key={tab.type}>{tab.name}</span>
                                        : <span className='text-center py-[10px] text-[#333] cursor-pointer w-[120px] sm:text-[18px] lg:text-[24px] font-[400]' key={tab.type} onClick={() => setActive(tab.type)}>{tab.name}</span>
                                )
                            })
                        }
                    </div>
                </div>
                {/* 企业资质 */}
                {
                    active=='qualifications' && (
                        <div className={`max-w-[1200px] mx-auto mb-20`}>
                            <div className='grid grid-flow-dense sm:grid-cols-1 md:grid-cols-3 md:px-4 xl:px-0 md:gap-x-4 lg:gap-x-8 xl:gap-x-44'>
                                {
                                    qualificationList.map((item, key) => {
                                        return (
                                            <div
                                                className='wow rollIn flex flex-col items-center sm:mt-10 md:mt-20 lg:mt-40 hover:scale-105 transition-all'
                                                key={key}>
                                                <div className={`bg-[#F0F0F0] p-[20px]`}>
                                                    <Image radius="none" src={item.image} alt={item.name} />
                                                </div>
                                                <p className='text-[#333] text-center text-[16px] font-[400] mt-4'>{item.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='sm:mt-12 md:mt-24 lg:mt-32 text-center w-full text-[#333]'>
                                <h3 className='text-[24px] font-[700]'>参与多项标准制订</h3>
                                <p className='text-[14px] mt-2'>PARTICIPATE IN MULTIPLE STANDARD DESIGNATION</p>
                                <div className='grid grid-flow-dense sm:grid-cols-1 md:grid-cols-2 text-left md:gap-x-3 lg:gap-x-10 sm:px-4 xl:px-[180px] sm:mt-[30px] md:mt-[70px]'>
                                    {
                                        standardList.map((item, key) => {
                                            return (
                                                <p className='wow zoomInUp border-l-1 border-[#333] sm:text-[13px] md:text-[14px] lg:text-[16px] my-4 sm:leading-[28px] md:leading-[40px] sm:h-[28px] md:h-[40px] pl-4' key={key}>
                                                    {item}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
                {/* 企业荣誉 */}
                {
                    active=='honor' && (
                        <div className='max-w-[1200px] mx-auto text-center mb-20'>
                            <div className='grid grid-flow-dense md:gap-x-4 md:px-4 xl:px-0 sm:grid-cols-1 md:grid-cols-3 lg:gap-x-8 xl:gap-x-44'>
                                {
                                    honorList.map((item, key) => {
                                        return (
                                            <div
                                                className='wow rollIn flex flex-col items-center sm:mt-12 md:mt-40 hover:translate-x-1.5 transition-all'
                                                key={key}>
                                                <div className={`bg-[#F0F0F0] p-[10px]`}>
                                                    <Image radius="none" src={item.image} alt={item.name} />
                                                </div>
                                                <p className='text-[#333] px-6 text-[16px] font-[400] mt-4'>{item.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div
                                className='wow rollIn flex flex-col items-center mt-8 sm:px-4 lg:px-0 hover:translate-x-1.5 transition-all'>
                                <div className={`bg-[#F0F0F0] p-[10px]`}>
                                    <Image radius="none" src='/images/honor/consumer.png' alt="产品获得用户肯定" />
                                </div>
                                <p className='text-[#333] px-6 text-[16px] font-[400] mt-4'>产品获得用户肯定</p>
                            </div>
                        </div>
                    )
                }
                {/* 软件著作权 */}
                {
                    active=='copyrights' && (
                        <div className='max-w-[1200px] mx-auto text-center my-32'>
                            <div className='flex flex-row flex-wrap justify-center gap-x-10'>
                                {
                                    softwareList.map((item, key) => {
                                        return (
                                            <div
                                                className='wow rollIn flex flex-col items-center mt-10 hover:rotate-6 transition-all'
                                                key={key}>
                                                <div className={`bg-[#F0F0F0] p-[10px]`}>
                                                    <Image radius="none" src={item.image} alt='大道云隐' />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <p className='text-center text-[#333] mt-20 text-[16px]'>超过数十项发明专利积累</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Honor