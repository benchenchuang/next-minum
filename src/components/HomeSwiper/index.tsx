'use client';
import React from 'react'
import { Pagination,Autoplay,EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/effect-fade"

const HomeSwiper = () => {
    return (
        <>
            <Swiper
                modules={[Pagination,Autoplay]}
                slidesPerView={1}
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
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide style={{ background: "blue", height: "200px" }}>Slide 1</SwiperSlide>
                <SwiperSlide style={{ background: "yellow", height: "200px" }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{ background: "pink", height: "200px" }}>Slide 3</SwiperSlide>
                <SwiperSlide style={{ background: "lightblue", height: "200px" }}>Slide 4</SwiperSlide>
            </Swiper>
            <style jsx global>
                {`
                    .swiper-pagination {
                        text-align: right;
                        padding-right: 10px;
                    }
                    .swiper-pagination-bullet {
                        width:20px;
                        height:4px;
                        border-radius: 2px;
                    }
                    .swiper-pagination-bullet-active {
                        background: green;
                    }
                `}
            </style>
        </>
    )
}

export default HomeSwiper