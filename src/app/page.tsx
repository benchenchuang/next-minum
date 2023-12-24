"use client"
import HomeSwiper from '@/components/HomeSwiper'
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
        <div style={{ height: '2000px', marginTop: '-3rem' }}>
            <HomeSwiper />
            <Button
                disableRipple
                className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                size="lg"
            >
                Press me
            </Button>
            <div style={{ height: '300px' }}>

            </div>
            <section className="wow slideInLeft">ssssss</section>
            <section className="wow slideInRight">dddddd</section>
        </div>
    )
}
