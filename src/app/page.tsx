/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-07 11:17:05
 * @FilePath: /minum-website/src/app/page.tsx
 */
"use client"
import { Button } from '@nextui-org/react'
// @ts-ignore
import { useEffect } from 'react'
import '../styles/animate.css'
import { wowInit } from '@/utils/wow-init'

export default function Home() {
    useEffect(()=>{
        wowInit()
    },[])
    return (
        <div style={{ height: '2000px', marginTop: '-3rem',background:'#f00' }}>
            
            <div style={{ height: '300px' }}>

            </div>
            <section className="wow slideInLeft">ssssss</section>
            <section className="wow slideInRight">dddddd</section>
        </div>
    )
}
