'use client'
import React, { useState } from 'react'
import BlockHeader from '@/components/BlockHeader'

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
                
            </div>
        </div>
    )
}

export default CompanyIntroduction