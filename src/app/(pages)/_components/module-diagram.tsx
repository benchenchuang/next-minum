/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-13 10:50:35
 * @LastEditTime: 2024-01-15 21:44:37
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
    const assetsList = [
        {
            icon:'/images/home/assets/01.png',
            name:'资产目录'
        },
        {
            icon:'/images/home/assets/02.png',
            name:'安全风险评估'
        },
        {
            icon:'/images/home/assets/03.png',
            name:'分类分级'
        }
    ]
    const fileList = [
        {
            icon:'/images/home/module/01.png',
            name:'安全协作'
        },
        {
            icon:'/images/home/module/02.png',
            name:'企业网盘'
        },
        {
            icon:'/images/home/module/03.png',
            name:'数据同步'
        },
        {
            icon:'/images/home/module/04.png',
            name:'内容合规'
        },
        {
            icon:'/images/home/module/05.png',
            name:'动态权限'
        }
    ]
    const leakList = [
        {
            icon:'/images/home/leak/01.png',
            name:'内部管控'
        },
        {
            icon:'/images/home/leak/02.png',
            name:'外发保护'
        },
        {
            icon:'/images/home/leak/03.png',
            name:'社交保护'
        },
        {
            icon:'/images/home/leak/04.png',
            name:'风险分析'
        },
        {
            icon:'/images/home/leak/05.png',
            name:'行为分析'
        },
        {
            icon:'/images/home/leak/06.png',
            name:'文件溯源'
        }
    ]
    const damageList = [
        {
            icon:'/images/home/damage/01.png',
            name:'实时备份'
        },
        {
            icon:'/images/home/damage/02.png',
            name:'数据恢复'
        },
        {
            icon:'/images/home/damage/03.png',
            name:'同城异地'
        },
        {
            icon:'/images/home/damage/04.png',
            name:'数据防勒索'
        }
    ]

    return (
        <div className='bg-diagram-module relative sm:py-[25px] md:py-[50px] overflow-y-hidden'>
            <BlockHeader {...header} />
            <div className='relative z-10 max-w-[1200px] mx-auto sm:pt-[50px] md:pt-[80px]'>
                <div className='flex flex-row md:gap-24 lg:gap-36 border-[#304782] border-b-[3px] rounded-[4px] sm:px-4 xl:px-0 box-border'>
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
                {/* 数据资产发现 */}
                {
                    active=='data-find' && (
                        <div className='grid grid-flow-col grid-cols-3 sm:gap-3 md:gap-10 sm:mt-5 md:mt-10 sm:px-[20px] xl:px-0'>
                            {
                                assetsList.map((item,key)=>{
                                    return (
                                        <div key={key} className='flex flex-col items-center bg-white bg-opacity-30 rounded-[5px] sm:py-[20px] md:py-[50px]'>
                                            <Image className='sm:max-h-[60px] md:max-h-[80px] xl:max-h-[140px]' src={item.icon} alt={item.name} />
                                            <p className='text-white sm:mt-[20px] md:mt-[50px] sm:text-[14px] md:text-[20px] '>{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
                {/* 文档管理 */}
                {
                    active=='file-manage' && (
                        <div className='grid grid-flow-dense sm:grid-cols-3 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-5 sm:gap-2 md:gap-5 sm:mt-5 md:mt-10 sm:px-[20px] xl:px-0'>
                            {
                                fileList.map((item,key)=>{
                                    return (
                                        <div key={key} className='flex flex-col items-center bg-[#33539E] bg-opacity-80 rounded-[5px] sm:pt-[30px] md:pt-[75px] pb-[30px]'>
                                            <Image className='sm:max-h-[60px] md:max-h-[80px] xl:max-h-[140px]' src={item.icon} alt={item.name} />
                                            <p className='text-white sm:mt-[20px] md:mt-[40px] lg:mt-[70px] sm:text-[14px] md:text-[20px]'>{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
                {/* 数据防泄密修改 */}
                {
                    active=='data-leak' && (
                        <div className='grid grid-flow-dense grid-cols-3 sm:gap-2 md:gap-4 sm:mt-5 md:mt-10 sm:px-[20px] xl:px-0'>
                            {
                                leakList.map((item,key)=>{
                                    return (
                                        <div key={key} className='flex flex-col items-center bg-[#33539E] bg-opacity-75 rounded-[5px] py-[10px] sm:px-[10px] md:px-[30px] box-border'>
                                            <p className='text-white mb-[10px] sm:text-[14px] md:text-[20px]'>{item.name}</p>
                                            <div className='bg-[#173278] w-full rounded-[5px] mb-[5px] py-[23px] flex flex-col justify-center items-center box-border'>
                                                <Image className='sm:max-h-[40px] md:max-h-[73px]' src={item.icon} alt={item.name} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
                {/* 数据灾备 */}
                {
                    active=='data-damage' && (
                        <div className='bg-[#33539E] bg-opacity-75 rounded-[5px] md:px-[30px] py-[20px] sm:mt-5 md:mt-10 sm:px-[20px]'>
                            <h3 className='text-white text-[20px] text-center'>容灾备份</h3>
                            <div className='grid grid-flow-dense sm:grid-cols-2 md:grid-cols-4 gap-3 mt-5'>
                                {
                                    damageList.map((item,key)=>{
                                        return (
                                            <div key={key} className='flex flex-col bg-[#173278] rounded-[5px] items-center pt-[50px] px-[50px] pb-[30px] box-border'>
                                                <Image className='max-h-[73px]' src={item.icon} alt={item.name} />
                                                <p className='text-[#C9D5F5] sm:mt-[30px] md:mt-[45px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-[300]'>{item.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='absolute left-0 bottom-0 z-0 right-0 w-screen opacity-20'>
                <Image src="/images/home/diagram_bg.png" alt="大道云隐-模块架构" />
            </div>
        </div>
    )
}

export default ModuleDiagram