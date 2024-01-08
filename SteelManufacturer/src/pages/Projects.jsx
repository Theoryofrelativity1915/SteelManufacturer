import React, { useRef, useState } from 'react';
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
function Projects() {
  return (
    <div className='relative flex flex-col flex-grow'>
      <div className='relative mt-30 flex-1 flex flex-col items-center justify-center bg-green-400'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='w-96 h-auto' src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-96 h-auto' src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-96 h-auto' src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-96 h-auto' src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='w-96 h-auto' src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
