/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-12 22:50:52
 * @LastEditTime: 2024-01-17 22:23:44
 * @FilePath: /minum-website/src/app/(pages)/_components/data-module.tsx
 */
import React from 'react'
import BlockHeader from '@/components/BlockHeader'
import { Image } from "@nextui-org/react";

const DataModule = () => {
    let header = {
        title: '模块',
        en_title: 'module'
    }
    const moduleList = [
        '分类分级', '内容审核', '数据防止泄露', '外发管控',
        '流程溯源', '态势感知', '内容风控', '数据全景',
        '员工行为风控', '内容脱敏', '数据备份恢复', '安全协作',
    ]
    return (
        <div className='bg-[#F5F8FC] sm:py-[50px] md:py-[100px] relative'>
            <BlockHeader {...header} />
            <div className='relative z-10 max-w-[1241px] xl:mx-auto sm:pt-[50px] md:pt-[70px] grid sm:mx-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-8'>
                {
                    moduleList.map((item,key)=>{
                        return (
                            <div className={`wow bounceIn cursor-pointer text-center flex flex-col items-center text-[#666] font-[400] hover:font-[700] hover:text-white py-[10px] justify-center sm:h-[40px] md:h-[64px] transition bg-module-item hover:bg-module-active `}key={key}>
                                <h3 className='sm:text-[12px] md:text-[16px] lg:text-[20px]'>{item}</h3>
                            </div>
                        )
                    })
                }
            </div>
            <div className='absolute left-0 bottom-0 z-0 right-0 w-screen'>
                <Image src="/images/home/module_bg.png" alt="大道云隐-模块" />
            </div>
        </div>
    )
}

export default DataModule