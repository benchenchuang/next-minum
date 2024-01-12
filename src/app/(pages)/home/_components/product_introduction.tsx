'use client'
import React from 'react'
import BlockHeader from '@/components/BlockHeader'
import { Image } from "@nextui-org/react";
import { Pagination,Autoplay,EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/effect-fade"

const ProductIntroduction = () => {
    let header = {
        title: '产品介绍',
        en_title: 'Product Introduction'
    }
    return (
        <div className='sm:py-[50px] md:py-[100px]'>
            <BlockHeader {...header} />
            <div className='max-w-[1200px] mx-auto sm:pt-[30px] md:pt-[70px]'>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    style={{paddingBottom:'30px'}}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop
                    mousewheel
                    pagination={{ clickable: true }}
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 60,
                        stretch: 1,
                        depth: 20,
                        modifier: 1,
                        slideShadows: true,
                    }}
                >
                    <SwiperSlide>
                        {/* 密数云 */}
                        <div className='flex sm:flex-col lg:flex-row sm:mx-[20px] md:mx-[20px] lg:mx-0'>
                            <div className='flex-col flex-1 md:mr-[50px] tracking-[3px]'>
                                <Image className='sm:w-[92px] md:w-[124px]' src="/images/home/msy_logo.svg" alt="密数云" />
                                <h3 className='border-l-[6px] border-[#153E8B] sm:leading-[18px] md:leading-[26px] text-[#333] sm:mt-[20px] md:mt-[40px] sm:text-[20px] md:text-[30px] font-[500] pl-[10px]'>密数云</h3>
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
                            <Image className='flex-1' src="/images/home/msy.png" alt="密数云产品优势" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* 密数四库 */}
                        <div className='flex sm:flex-col lg:flex-row sm:mx-[20px] items-end md:mx-[20px] lg:mx-0'>
                            <div className='flex-col md:mr-[50px] tracking-[3px] lg:max-w-[503px]'>
                                <Image className='sm:w-[88px] md:w-[136px]' src="/images/home/mssk_logo.svg" alt="密数四库" />
                                <h3 className='border-l-[6px] border-[#153E8B] sm:leading-[18px] md:leading-[26px] text-[#333] sm:mt-[20px] md:mt-[40px] sm:text-[20px] md:text-[30px] font-[500] pl-[10px]'>密数四库</h3>
                                <div className='text-[#666] font-[400] sm:text-[14px] md:text-[18px]'>
                                    <div className='mt-[20px] sm:text-[10px] md:text-[16px] text-center leading-[32px] text-[#666] grid grid-cols-2 grid-flow-row gap-4'>
                                        <p className='border rounded-[5px] border-[#666666]'>为企业提供精准的数据服务</p>
                                        <p className='border rounded-[5px] border-[#666666]'>数据资产的精细化管理</p>
                                        <p className='border rounded-[5px] border-[#666666]'>减少数据安全风险</p>
                                        <p className='border rounded-[5px] border-[#666666]'>规范安全防护措施</p>
                                        <p className='border rounded-[5px] border-[#666666]'>促进数据开放共享</p>
                                        <p className='border rounded-[5px] border-[#666666]'>厘清数据资产</p>
                                    </div>
                                    <div className='sm:mt-[15px] md:mt-[30px]'>
                                        <p className='mt-[5px]'><span className='font-[500]'>效率：</span>算法可以快速、准确地处理大量数据，而人工分类分级通常需要花费更多的时间和人力。</p>
                                        <p className='mt-[5px]'><span className='font-[500]'>准确性：</span>算法基于预设规则和模式进行分类分级，可以减少人为错误和偏见，提高准确性。</p>
                                        <p className='mt-[5px]'><span className='font-[500]'>可扩展性：</span>随着数据量的增加，算法可以自动适应并扩展分类分级的规模，而不需要增加人力成本。</p>
                                    </div>
                                </div>
                            </div>
                            <Image className='flex-1' src="/images/home/mssk.png" alt="密数四库优点" />
                        </div>
                    </SwiperSlide>

                </Swiper>
                <style jsx global>
                    {`
                    .swiper-pagination {
                        text-align: center;
                    }
                    .swiper-pagination-bullet {
                        width:15px;
                        height:6px;
                        border-radius: 3px;
                        background: #666666;
                    }
                    .swiper-pagination-bullet-active {
                        width:30px;
                        background: #B6C1CC;
                    }
                `}
                </style>
            </div>
        </div>
    )
}

export default ProductIntroduction