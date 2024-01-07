/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:37:44
 * @LastEditTime: 2024-01-07 16:34:31
 * @FilePath: /minum-website/src/components/SiteFooter/index.tsx
 */
import React from 'react'
import {Link,Image,Divider} from "@nextui-org/react";

const Footer = () => {
    return (
        <div className='bg-site-primary w-full justify-center flex'>
            <div className='w-[1280px] pt-[80px] pb-[20px] sm:px-2'>
                <div className='flex flex-row mb-[120px]'>
                    <div className='code_box md:pl-[70px] w-[180px] box-border border-l-[1px] border-[#D5DBE6] border-opacity-30'>
                        <Image className='rounded-none' src='/images/common/wx-code.png' alt='大道云隐公众哈'/>
                        <p className='mt-[8px] text-[14px] text-center text-white font-[300]'>扫描二维码关注微信公众平台</p>
                    </div>
                </div>
                <div className='sm:flex-col md:flex-row flex w-full items-center'>
                    <Link className='color-sub-primary sm:text-[12px] md:text-[14px] flex justify-center flex-1'href='https://beian.mps.gov.cn/#/query/webSearch'>苏公网安备 32041102000953号</Link>
                    <Link className='color-sub-primary sm:text-[12px] md:text-[14px] flex justify-center flex-1' href='https://beian.miit.gov.cn/'>苏ICP备2022041720号-1</Link>
                </div>
            </div>

            {/* <div className='hidden sm:flex'>pc - Footer</div>
            <div className='sm:hidden'>phone-Footer-test</div> */}
        </div>
    )
}

export default Footer