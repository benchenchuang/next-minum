/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-07 13:08:46
 * @LastEditTime: 2024-01-07 15:14:48
 * @FilePath: /minum-website/src/components/BannerShow/index.tsx
 */
import React from 'react'
import { Image } from "@nextui-org/react";

export type BannerType = {
    bgColor?: string
    textColor?: string
    title?: string
    subTitle?: string
    description?: string
}

const BannerShow = (props: BannerType) => {
    let {
        bgColor = '#0d1943',
        textColor = 'text-white',
        title = '大道云隐',
        subTitle = '新一代数据资产安全保护引领者',
        description = '新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障'
    } = props;
    return (
        <div className='relative flex justify-center' style={{ backgroundColor: bgColor }}>
            <div className='absolute z-10 h-full flex items-center'>
                <div className={`banner_text_box ${textColor} text-center max-w-[1200px]`}>
                    {
                        title && <h2 className='title sm:text-[20px] md:text-[50px] xl:text-[80px] font-[700] sm:tracking-[5px] md:tracking-[20px]'>{title}</h2>
                    }
                    {
                        subTitle && <h3 className="slogan sm:text-[12px] md:text-[24px] xl:text-[36px] font-[500] sm:mt-1 md:mt-7 sm:tracking-[5px] md:tracking-[20px]">{subTitle}</h3>
                    }
                    {
                        description && <p className="description p-1 sm:text-[10px] md:text-[18px] xl:text-[24px] font-[300] sm:mt-2 md:mt-14 sm:tracking-[2px] md:tracking-[5px]">{description}</p>
                    }
                </div>
            </div>
            <Image
                className="max-h-[909px] rounded-none z-0"
                src='/images/common/banner_bg.png'
                alt='大道云隐-新一代数据资产安全保护引领者'></Image>
        </div>
    )
}

export default BannerShow