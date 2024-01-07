/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-07 15:28:58
 * @FilePath: /minum-website/src/app/page.tsx
 */
"use client"
import { Button } from '@nextui-org/react'
// @ts-ignore
import { useEffect } from 'react'
import '../styles/animate.css'
import { wowInit } from '@/utils/wow-init'
import BannerShow from '@/components/BannerShow'

export default function Home() {
    useEffect(()=>{
        wowInit()
    },[])
    return (
        <div>
            <BannerShow/>
            <div style={{height:'400px'}}></div>
            <section className="wow slideInLeft">ssssss</section>
            <section className="wow slideInRight">dddddd</section>
        </div>
    )
}
