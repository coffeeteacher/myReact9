import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper                
                direction={'horizontal'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="./images/p3.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="./images/p5.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="./images/p7.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
