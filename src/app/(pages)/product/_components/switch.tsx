'use client';
import React, { useState } from 'react'
import { Image } from '@nextui-org/react'

const ExampleSwitch = (props: { switchExample: Function; type: number; }) => {
    let { type } = props
    const tabList = [
        {
            name: '密数云',
            value: 1,
            path:'/images/home/msy_logo.svg'
        },
        {
            name: '密数四库',
            value: 2,
            path:'/images/home/mssk_logo.svg'
        }
    ]
    const switchTab = (num: number) => {
        props.switchExample(num)
    }
    return (
        <div className='relative z-10 sm:-mt-16 sm:pb-4 md:-mt-20 md:pb-10 lg:-mt-24 lg:pb-10'>
            <div className='flex flex-row items-center justify-center'>
                {
                    tabList.map((item, key) => {
                        return (
                            <div
                                key={item.value}
                                className={`cursor-pointer bg-[#fff] 
                                    ${key == 0 && 'rounded-tl-full rounded-bl-full'} 
                                    ${key == (tabList.length - 1) && 'rounded-tr-full rounded-br-full'} 
                                    ${type == key ? 'bg-opacity-90 text-[#153E8B]' : 'bg-opacity-60 text-[#666]'} 
                                    sm:px-[40px] md:px-[80px] lg:px-[100px]`}
                                onClick={() => switchTab(key)}>
                                <Image
                                    radius='none'
                                    src={item.path}
                                    alt={item.name} 
                                    className={`sm:px-2 md:px-4 lg:px-6 sm:py-1  md:py-2 lg:py-3 sm:border-b-3 md:border-b-5 ${type == key ? 'border-[#153E8B]' : 'border-transparent'}`} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExampleSwitch