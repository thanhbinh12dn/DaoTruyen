import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import SLIDER1 from '../img/newupdate2.jpg'
import SLIDER2 from '../img/newupdate7.jpg'
import SLIDER3 from '../img/newupdate3.jpg'
import SLIDER4 from '../img/completed7.jpg'
import SLIDER5 from '../img/completed8.jpg'

function CarouselSlider() {
    return (
        <div className="pt-[15px] mb-[15px] slide-container">
            <div className="container">
                <Swiper
                    effect={'coverflow'}
                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    spaceBetween={1}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 50,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true
                    }}
                    navigation={true}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={SLIDER1} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SLIDER2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SLIDER3} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SLIDER4} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SLIDER5} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SLIDER2} alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SLIDER1} alt="slide_image" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default CarouselSlider;