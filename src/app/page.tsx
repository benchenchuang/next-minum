"use client"
import HomeSwiper from '@/components/HomeSwiper'
import { Button } from '@nextui-org/react'
import { WOW } from 'wowjs'
import { useEffect } from 'react'
import './animate.css'

export default function Home() {
    useEffect(()=>{
        if (typeof window !== "undefined") {
            let wow = new WOW(
                {
                    boxClass: 'wow',      // animated element css class (default is wow)
                    animateClass: 'animated', // animation css class (default is animated)
                    offset: 0,          // distance to the element when triggering the animation (default is 0)
                    mobile: true,       // trigger animations on mobile devices (default is true)
                    live: false,       // act on asynchronously loaded content (default is true)
                    scrollContainer: null // optional scroll container selector, otherwise use window
                }
            );
            wow.init();
        }
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
