/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-17 21:48:50
 * @LastEditTime: 2024-02-04 16:00:54
 * @FilePath: /minum-website/src/app/(pages)/cooperation/_components/one_service.tsx
 */
import React from 'react'
import BlockHeader from '@/components/BlockHeader'
import { Image } from "@nextui-org/react";

const OneService = () => {
    let header = {
        title: '密数云提供服务',
        en_title: 'Minum Provides Services'
    }
    const list = [
        '上网行为监控',
        '网站访问控制',
        '外发文件溯源',
        '涉密内容审核',
        '在线聊天监控',
        '上网日志审计',
        '动态权限管控',
        '安全态势感知',
        '加密企业文件',
        '实时上报告经',
        '安全在线协作',
        '防勒索病毒',
    ]
    return (
        <div className='bg-[#DCE8F5] relative sm:py-[50px] md:py-[100px] overflow-hidden'>
            <BlockHeader {...header} />
            <div className='relative z-10 max-w-[1200px] xl:mx-auto sm:pt-[50px] md:pt-[70px] grid sm:mx-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-8'>
                {
                    list.map((item,key)=>{
                        return (
                            <div className={`wow bounceIn cursor-pointer bg-[#F5F8FF] border border-[#153E8B] rounded-[10px] text-center flex flex-col items-center text-[#333] font-[400] hover:font-[700] hover:text-white py-[10px] justify-center sm:h-[50px] md:h-[80px] transition hover:bg-module-active `}key={key}>
                                <h3 className='sm:text-[12px] md:text-[16px] lg:text-[24px]'>{item}</h3>
                            </div>
                        )
                    })
                }
            </div>
            <img className='absolute left-0 bottom-0 z-0 right-0 h-full w-full' src="/images/cooperate/one/service_bg.png" alt="大道云隐-密数云提供服务" />
        </div>
    )
}

export default OneService