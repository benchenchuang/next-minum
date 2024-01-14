/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-07 13:08:46
 * @LastEditTime: 2024-01-14 11:01:01
 * @FilePath: /minum-website/src/components/BannerShow/index.tsx
 */
'use client'
import React from 'react'
import { Image } from "@nextui-org/react";
import { wowInit } from '@/libs/wow-init';

export type BannerType = {
    bgColor?: string
    textColor?: string
    title?: string
    subTitle?: string
    imagePath?: string
    videoPath?: string
    description?: string
    position:string
}
wowInit()
const BannerShow = (props: BannerType) => {
    let {
        bgColor = '',
        textColor = '',
        title = '',
        subTitle = '',
        imagePath = '',
        videoPath = '',
        description = '',
        position = 'items-center'
    } = props;
    return (
        <div className='relative flex justify-center' style={{ backgroundColor: bgColor }}>
            <div className={`absolute z-10 h-full flex ${position}`}>
                <div className={`banner_text_box ${textColor} text-center max-w-[1200px]`}>
                    {
                        title && <h2 className='wow fadeInDown title sm:text-[20px] md:text-[50px] xl:text-[80px] font-[700] sm:mt-2 xl:mt-0 sm:tracking-[5px] md:tracking-[20px]'>{title}</h2>
                    }
                    {
                        subTitle && <h3 className="wow fadeInLeft slogan sm:text-[12px] md:text-[24px] xl:text-[36px] font-[500] sm:mt-1 md:mt-2 xl:mt-7 sm:tracking-[5px] md:tracking-[20px]">{subTitle}</h3>
                    }
                    {
                        description && <p className="wow fadeInUp description p-1 sm:text-[10px] md:text-[18px] xl:text-[24px] font-[300] sm:mt-1 md:mt-4  xl:mt-14 sm:tracking-[2px] md:tracking-[5px]">{description}</p>
                    }
                </div>
            </div>
            {
                imagePath && (<Image
                    className="max-h-[909px] rounded-none z-0"
                    src={imagePath}
                    alt={title + '-' + subTitle}></Image>)
            }
            {
                videoPath && (
                    <video className="max-h-[909px] rounded-none z-1" preload="auto" loop autoPlay muted src={videoPath}></video>
                )
            }

        </div>
    )
}

export default BannerShow