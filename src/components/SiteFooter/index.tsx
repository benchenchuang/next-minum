/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:37:44
 * @LastEditTime: 2024-01-07 18:19:42
 * @FilePath: /minum-website/src/components/SiteFooter/index.tsx
 */
import React from 'react'
import {Link,Image,Divider} from "@nextui-org/react";

const mobileMenus = [
    {
        title:'服务支持',
        children:[
            {
                name:'电话：18112304808',
                path:'tel:18112304808'
            },
            {
                name:'电话：18112304808',
                path:'tel:18112304808'
            },
            {
                name:'邮箱：service@minum.cloud',
                path:'mailto:service@minum.cloud'
            }
        ]
    } 
]
const siteFooterMenus = [
    {
        title:'公司介绍',
        children:[
            {
                name:'资质与荣誉',
                path:'href:(0)'
            },
            {
                name:'公司官网',
                path:'href:(0)'
            }
        ]
    },
    {
        title:'产品和服务',
        children:[
            {
                name:'密数云',
                path:'href:(0)'
            },
            {
                name:'密数四库',
                path:'href:(0)'
            }
        ]
    },
    {
        title:'使用手册',
        children:[
            {
                name:'服务条款',
                path:'href:(0)'
            },
            {
                name:'隐私声明',
                path:'href:(0)'
            }
        ]
    },
    ...mobileMenus
]

const Footer = () => {
    return (
        <div className='bg-site-primary w-full justify-center flex'>
            <div className='w-[1280px] sm:pt-[40px] pt-[80px] pb-[20px] sm:px-2 box-border'>
                <div className='flex flex-row sm:px-[20px] md:px-0 sm:items-center mb-[100px] sm:mb-[30px]'>
                    <div className='md:mr-10 lg:mr-20'>
                        <Image
                            width={150}
                            className='hidden lg:flex'
                            alt="大道云隐"
                            src="/images/common/logo.png"
                        />
                        <Image
                            width={120}
                            className='sm:hidden'
                            alt="大道云隐"
                            src="/images/common/logo.png"
                        />
                    </div>
                    <div className='hidden md:flex flex-wrap flex-1'>
                        {
                            siteFooterMenus.map((item,index)=>{
                                return(
                                    <div className='flex flex-1 flex-col' key={index}>
                                        <h3 className='text-white md:text-[14px] lg:text-[16px] font-[700]'>{item.title}</h3>
                                        {
                                            item.children.map(child=>{
                                            return <Link
                                                className='text-[#D5DBE6] md:text-[12px] lg:text-[14px] mt-[20px] font-[400]'
                                                href={child.path}
                                                key={child.name}>{child.name}</Link>
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='md:hidden flex flex-wrap flex-1'>
                        {
                            mobileMenus.map((item,index)=>{
                                return(
                                    <div className='flex flex-1 flex-col' key={index}>
                                        <h3 className='text-white text-[14px] font-[600]'>{item.title}</h3>
                                        {
                                            item.children.map(child=>{
                                            return <Link
                                                className='text-[#D5DBE6] text-[12px] mt-[15px] font-[400]'
                                                href={child.path}
                                                key={child.name}>{child.name}</Link>
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                    <div className='code_box md:pl-[30px] md:mx-[10px] lg:pl-[70px] lg:mx-[20px] sm:pt-[20px] sm:w-[100px] md:w-[120px] lg:w-[180px] sm:border-none md:border-solid box-border border-l-[1px] border-[#D5DBE6] border-opacity-30'>
                        <Image className='rounded-none' src='/images/common/wx-code.png' alt='大道云隐公众哈'/>
                        <p className='mt-[8px] sm:text-[12px] md:text-[14px] text-center text-white font-[300]'>扫描二维码关注微信公众平台</p>
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