/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-07 19:00:54
 * @FilePath: /minum-website/src/app/page.tsx
 */
"use client"
import { Button } from '@nextui-org/react'
// @ts-ignore
import { useEffect } from 'react'
import '../styles/animate.css'
import { wowInit } from '@/utils/wow-init'
import BannerShow from '@/components/BannerShow'
import HomeSummarize from './_components/home_summarize'

export default function Home() {
    useEffect(()=>{
        wowInit()
    },[])
    return (
        <div>
            <BannerShow/>
            <HomeSummarize />
            <div style={{height:'400px'}}></div>
            <section className="wow slideInLeft">ssssss</section>
            <section className="wow slideInRight">dddddd</section>
        </div>
    )
}
