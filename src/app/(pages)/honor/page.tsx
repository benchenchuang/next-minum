/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-14 10:33:46
 * @LastEditTime: 2024-01-14 11:51:10
 * @FilePath: /minum-website/src/app/(pages)/honor/page.tsx
 */
'use client'
import React, { useState } from 'react'
import BannerShow from '@/components/BannerShow'
import {Image} from '@nextui-org/react'

const Honor = () => {
    const banner = {
        bgColor: '#0d1943',
        textColor: 'text-[#333]',
        title: '大道云隐',
        position:'top-1/4',
        subTitle: '新一代数据资产安全保护引领者',
        imagePath: '/images/honor/banner_bg.png',
        description: '新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障'
    }
    const [active,setActive] = useState<string>('qualifications')
    const tabList = [
        {
            name:'企业资质',
            type:'qualifications'
        },
        {
            name:'企业荣誉',
            type:'honor'
        },
        {
            name:'软件著作权',
            type:'copyrights'
        }
    ]

    const qualificationList = [
        {
            image:'/images/honor/qualification-01.png.png',
            name:'企业荣誉',
            type:'vertical'
        },
        {
            image:'/images/honor/qualification-02.png.png',
            name:'企业荣誉',
            type:'vertical'
        },
        {
            image:'/images/honor/qualification-03.png.png',
            name:'企业荣誉',
            type:'vertical'
        },
        {
            image:'/images/honor/qualification-04.png.png',
            name:'企业荣誉',
            type:'horizontal'
        },
        {
            image:'/images/honor/qualification-05.png.png',
            name:'企业荣誉',
            type:'horizontal'
        },
        {
            image:'/images/honor/qualification-06.png.png',
            name:'企业荣誉',
            type:'horizontal'
        }
    ]

    return (
        <div className='sm:-mt-10 md:-mt-20'>
            <BannerShow {...banner} />
            <div className='mt-[90px]'>
                <div className='border-[#F0F0F0] border-b-[3px]'>
                    <div className='max-w-[1200px] mx-auto flex flex-row justify-between'>
                        {
                            tabList.map(tab=>{
                                return (
                                    active==tab.type?<span className='text-center py-[10px] text-[#0D61A0] cursor-pointer border-[#0D61A0] border-b-[5px] w-[120px] text-[24px] font-[500]' key={tab.type}>{tab.name}</span>
                                    :<span className='text-center py-[10px] text-[#333] cursor-pointer w-[120px] text-[24px] font-[400]' key={tab.type} onClick={()=>setActive(tab.type)}>{tab.name}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='max-w-[1200px] mx-auto grid grid-flow-dense grid-cols-3 gap-x-44 mb-20'>
                    {
                        qualificationList.map((item,key)=>{
                            return (
                                <div
                                    className='flex flex-col items-center mt-20'
                                    key={key}>
                                        <div className={`bg-[#F0F0F0] ${item.type=='vertical'?'p-[10px]':'p-[20px]'}`}>
                                            <Image radius="none" src={item.image} alt={item.name}/>
                                        </div>
                                    <p className='text-[#333] text-[16px] font-[400] mt-4'>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Honor