/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-15 21:50:57
 * @LastEditTime: 2024-01-16 23:04:42
 * @FilePath: /minum-website/src/app/(pages)/cooperation/_components/one_points.tsx
 */
import BlockHeader from '@/components/BlockHeader'
import React, { useState } from 'react'
import styles from './style.module.css'
import { Image } from '@nextui-org/react'

const OnePoints = () => {
    let header = {
        title: '企业痛点',
        en_title: 'Enterprise Pain Points'
    }
    const [active,setActive] = useState<number>(-1)
    const list = [
        {
            name: '部署多种管理系统，<br/>管理困难，已投入资金，<br/>依然发生信息安全事故'
        },
        {
            name: '多人员终端接入网络问题多'
        },
        {
            name: '外包开发接触数据，<br/>运维批量导出数据'
        },
        {
            name: '普通员工邮件外发<br/>内部数据共享研发网、<br/>办公网之间的网间数据传输'
        },
        {
            name: '终端安全管理困难'
        },
        {
            name: '数据操作岗查敏感数据，<br/>批量导出敏感数据需拷<br/>贝数据到外部'
        },
        {
            name: '外来人员来访目的未知<br/>终端状态未知U盘导入数据'
        }
    ]

    return (
        <div className='bg-[#F6F9FC] sm:py-[50px] md:py-[100px] relative'>
            <BlockHeader {...header} />
            <div className='max-w-[1200px] md:mx-auto sm:py-[50px] md:pt-[70px]'>
                <ul className={`${styles.menu} gap-y-9`}>
                    {
                        list.map((item, key) => {
                            return (
                                <li
                                    className={`${styles['menu-cell']} relative cursor-pointer hover:shadow-2xl sm:w-[240px] sm:h-[140px] sm:my-14 md:w-[170px] md:h-[100px] md:my-4 md:mx-2 lg:w-[220px] lg:h-[120px] lg:my-4 lg:mx-3 xl:w-[274px] xl:h-[150px] xl:mx-3 xl:my-8`}
                                    key={key}
                                    onMouseEnter={()=>setActive(key)}
                                    onMouseLeave={()=>setActive(-1)}>
                                    <p
                                        className='relative z-10 text-[#333] text-center sm:text-[14px] md:text-[12px] lg:text-[14px] xl:text-[18px]'
                                        dangerouslySetInnerHTML={{__html: item.name}}></p>
                                    <div className={`image opacity-0 ${active==key && 'opacity-100'} absolute md:-left-4 md:-top-12 lg:-top-16 md:-right-4 xl:-left-6 xl:-top-20 xl:-right-6 z-0`}>
                                        <Image src='/images/cooperate/one/path_bg.png' alt={item.name}/>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default OnePoints