import React from 'react'
import BlockHeader from '@/components/BlockHeader'
import { Image } from "@nextui-org/react";

const ProductIntroduction = () => {
    let header = {
        title:'产品介绍',
        en_title:'Product Introduction'
    }
    return (
        <div className='sm:py-[50px] md:py-[100px]'>
            <BlockHeader {...header}/>
            <div className='max-w-[1200px] mx-auto sm:pt-[30px] md:pt-[70px]'>
                {/* 密数云 */}
                <div className='flex sm:flex-col lg:flex-row sm:mx-[20px] md:mx-[20px] lg:mx-0'>
                    <div className='flex-col flex-1 md:mr-[50px] tracking-[3px]'>
                        <Image src="/images/home/msy_logo.png" alt="密数云"/>
                        <h3 className='border-l-[6px] border-[#153E8B] sm:leading-[18px] md:leading-[26px] text-[#333] mt-[40px] sm:text-[20px] md:text-[30px] font-[500] pl-[10px]'>密数云</h3>
                        <div className='text-[#666] font-[400] sm:text-[14px] md:text-[18px]'>
                            <div className='mt-[20px]'>
                                <h4 className='font-[500]'>针对传统安全解决方案的缺陷：</h4>
                                <p className='mt-[5px]'>无法全面资产盘点、人工分类分级、无法对涉密、敏感内容进行动态权限管理、改变操作习惯，降低日常工作效率、核心数据保护不足，非核心数据过度保护、企业外发无法跨平台、跨产品，无法溯源、无有效风控...</p>
                            </div>
                            <div className='sm:mt-[20px] md:mt-[40px]'>
                                <h4 className='font-[500]'>密数云提出在无感深入业务的前提下，提出下一代的非结构化资产管理的价值主张，涵盖：</h4>
                                <p className='mt-[5px]'>资产盘点、智能分类分级、内容识别管控，动态权限、全流程溯源、全平台外发，跨产品外发、数据合规、安全运营...</p>
                            </div>
                        </div>
                    </div>
                    <Image className='flex-1' src="/images/home/msy.png" alt="密数云产品优势"/>
                </div>
                {/* 密数四库 */}
            </div>
        </div>
    )
}

export default ProductIntroduction