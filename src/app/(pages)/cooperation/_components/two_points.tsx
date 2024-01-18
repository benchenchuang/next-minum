/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-15 21:50:57
 * @LastEditTime: 2024-01-18 21:47:46
 * @FilePath: /minum-website/src/app/(pages)/cooperation/_components/two_points.tsx
 */
import BlockHeader from '@/components/BlockHeader'
import React, { useState } from 'react'
import { Image } from '@nextui-org/react'

const TwoPoints = () => {
    let header = {
        title: '企业痛点',
        en_title: 'Enterprise Pain Points'
    }
    const [active, setActive] = useState<number>(-1)
    const list = [
        {
            icon: '/images/cooperate/two/point_01.svg',
            active: '/images/cooperate/two/point_01_active.svg',
            bg: '/images/cooperate/two/bg_01.png',
            name: '涉密文档',
            content: '内部泄露、外部窃取<br/>恶意攻击、不当使用'
        },
        {
            icon: '/images/cooperate/two/point_02.svg',
            active: '/images/cooperate/two/point_02_active.svg',
            bg: '/images/cooperate/two/bg_02.png',
            name: '员工离职<br/>泄露核心机密',
            content: '商业机密泄露<br/>损害企业声誉<br/>法律风险和诉讼<br/>影响企业战略和决策'
        },
        {
            icon: '/images/cooperate/two/point_03.svg',
            active: '/images/cooperate/two/point_03_active.svg',
            bg: '/images/cooperate/two/bg_03.png',
            name: '数据孤岛',
            content: '数据重复和不一致、<br/>决策失误、协作障碍、<br/>效率低下、法规遵从风险'
        },
        {
            icon: '/images/cooperate/two/point_04.svg',
            active: '/images/cooperate/two/point_04_active.svg',
            bg: '/images/cooperate/two/bg_04.png',
            name: '购买系统多<br/>集成管理困难',
            content: '管理效率降低<br/>高昂的维护成本<br/>增加安全风险<br/>难以扩展和升级'
        },
        {
            icon: '/images/cooperate/two/point_05.svg',
            active: '/images/cooperate/two/point_05_active.svg',
            bg: '/images/cooperate/two/bg_05.png',
            name: '无预测、<br/>无感知、无追溯',
            content: '风险管理不足、<br/>资源浪费、决策失误、<br/>信任危机、法规遵从问题'
        }
    ]

    return (
        <div className='bg-[#fff] sm:py-[50px] md:py-[100px] relative'>
            <BlockHeader {...header} />
            <div className='max-w-[1200px] md:mx-auto sm:py-[50px] md:pt-[70px] grid grid-flow-dense sm:grid-cols-1 md:grid-cols-5 sm:px-6 md:px-6 xl:px-0 sm:gap-y-6 md:gap-y-0 md:gap-x-2 xl:gap-x-3'>
                {
                    list.map((item, index) => {
                        return (
                            <div
                                onMouseEnter={() => setActive(index)}
                                onMouseLeave={() => setActive(-1)}
                                className={`wow animate__flipInY
                                relative bg-[#F5F9FC] cursor-pointer ${index == active ? 'text-white' : 'text-[#333]'} flex flex-col items-center overflow-hidden transition-all
                                    sm:py-[40px] xl:py-[60px]`}
                                key={index}>
                                {
                                    index === active ? <Image className='md:w-[60px] lg:w-[70px]' src={item.active} alt={item.name} /> : <Image className='md:w-[60px] lg:w-[70px]' src={item.icon} alt={item.name} />
                                }
                                <h3
                                    className='relative z-10 font-[500] text-center mt-[40px] md:text-[14px] xl:text-[20px] md:h-[40px] xl:h-[58px]'
                                    dangerouslySetInnerHTML={{ __html: item.name }}></h3>
                                <p
                                    className='relative z-10 font-[400] text-center mt-[20px] md:text-[12px] xl:text-[16px]'
                                    dangerouslySetInnerHTML={{ __html: item.content }}></p>
                                {
                                    index === active && (
                                        <div className='absolute left-0 top-0 right-0 bottom-0 z-0'>
                                            <div className='absolute left-0 top-0 bottom-0 right-0 z-10 bg-mask-module'></div>
                                            <img style={{'minWidth':'100%','minHeight':'100%'}} src={item.bg} alt={item.name} />
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TwoPoints