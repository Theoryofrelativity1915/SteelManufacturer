import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import img1 from '../assets/projects/alexandr-bormotin-jj3PpeBIlLA-unsplash.jpg'
import img2 from '../assets/projects/jacek-dylag-nhCPOp4A2Xo-unsplash.jpg'
import img3 from '../assets/projects/miguel-machado-0g8LXmQc4_Y-unsplash.jpg'
import img4 from '../assets/projects/joel-muniz-Pl94MdrIpL8-unsplash.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import Footer from '../components/Footer';

const ProjectCarousel = () => {
  return (
    <div className='flex flex-col flex-grow'>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={true}
        spaceBetween={50}
        navigation
        className='flex max-w-[90vw] sm:max-w-[50vw] flex-grow pt-4 pb-4'>
        <SwiperSlide className='relative flex min-h-min justify-center items-center max-w-full'>
          <img src={img1} loading="eager" className='brightness-75 object-cover object-center h-auto sm:max-h-[60vh] w-3/4 sm:w-1/2' />
          <div className={'absolute text-white bottom-5 '}>
            <h4 className='sm:text-3xl'>Microsoft Regional Headquarters</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative flex min-h-min justify-center items-center max-w-full'>
          <img src={img2} loading="eager" className='brightness-75 object-cover object-center h-auto sm:max-h-[60vh] w-3/4 sm:w-1/2' />
          <div className={'absolute text-white bottom-5 '}>
            <h4 className='text-2xl sm:text-4xl'>3M Offices</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative flex min-h-min justify-center items-center max-w-full'>
          <img src={img4} loading="eager" className='brightness-75 object-cover object-center h-auto sm:max-h-[60vh] w-3/4 sm:w-1/2' />
          <div className={'absolute text-white bottom-5 '}>
            <h4 className='text-2xl sm:text-4xl'>Ritz-Carlton Western</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative flex min-h-min justify-center items-center max-w-full'>
          <img src={img3} loading="eager" className='brightness-75 object-cover object-center h-auto sm:max-h-[60vh] w-3/4 sm:w-1/2' />
          <div className={'absolute text-white bottom-5 '}>
            <h4 className='text-xl sm:text-2xl md:text-4xl'>Walmart District Offices</h4>
          </div>
        </SwiperSlide>
      </Swiper >
      <Footer />
    </div >
  );
}

export default ProjectCarousel; 
