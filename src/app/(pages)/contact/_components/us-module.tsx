/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-14 14:31:55
 * @LastEditTime: 2024-01-15 19:40:09
 * @FilePath: /minum-website/src/app/(pages)/contact/_components/us-module.tsx
 */
import React from 'react'
import { Image } from "@nextui-org/react";
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const UsModule = () => {
    return (
        <div className='sm:py-[30px] md:py-[50px] xl:py-[100px]'>
            <div className='max-w-[1200px] flex sm:flex-col md:flex-row sm:mx-4 xl:mx-auto'>
                <div className='flex flex-col md:w-5/12 xl:w-1/3'>
                    <Image className='max-w-[150px]' src="/images/contact/logo.png" alt="大道云隐" />
                    <div className='sm:mt-[20px] md:mt-[30px] lg:mt-[50px]'>
                        <h3 className='text-[#153E8B] md:text-[24px] xl:text-[36px] font-[900]'>Contact us</h3>
                        <h3 className='text-[#333] md:text-[24px] xl:text-[36px] font-[700]'>联系我们</h3>
                    </div>
                    <div className='flex flex-col sm:gap-y-2 md:gap-y-3 lg:gap-y-8 sm:mt-[20px] md:mt-[40px] lg:mt-[70px]'>
                        <div className='flex flex-row items-center'>
                            <Image className='mr-[10px]' src='/images/contact/phone.png' />
                            <Link className='text-[#333] sm:text-[13px] xl:text-[16px] font-[400]' href={'tel:' + siteConfig.phone}>电话：{siteConfig.phone}</Link>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Image className='mr-[10px]' src='/images/contact/email.png' />
                            <Link className='text-[#333] sm:text-[13px] xl:text-[16px] font-[400]' href={'mailto:' + siteConfig.email}>邮箱：{siteConfig.email}</Link>
                        </div>
                        <div className='flex flex-row items-center'>
                            <Image className='mr-[10px]' src='/images/contact/address.png' />
                            <p className='text-[#333] sm:text-[13px] xl:text-[16px] font-[400]'>地址：{siteConfig.address}</p>
                        </div>
                    </div>
                    <h2 className='text-white text-center bg-[#153E8B] text-[16px] sm:mt-[15px] md:mt-[40px] lg:mt-[70px] leading-10 h-10 tracking-[9px]'>新一代数据资产安全保护引领者</h2>
                </div>
                <div className='box-border sm:mt-6 md:mt-0 md:w-7/12 lg:w-2/3 md:ml-[30px] lg:ml-[50px]'>
                    <Image radius='none' src='/images/contact/map.jpg' alt='大道云隐'/>
                </div>
            </div>
        </div>
    )
}

export default UsModule