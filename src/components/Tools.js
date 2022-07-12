import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import 'swiper/swiper.min.css'
import "swiper/swiper-bundle.min.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

export default function Tools() {
    return (

        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Autoplay]}
            className="toolsSwiper"
            autoplay={{
                delay: 2200,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <img src={require("../img/tools/html-icon.png")} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/css.png")} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/js.png")} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/jquery.png")} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/react-icon.png")} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/node.png")} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/mysql.png")} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/angular-icon.png")} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require("../img/tools/github-w.png")} />
            </SwiperSlide>
        </Swiper>

    );
}
