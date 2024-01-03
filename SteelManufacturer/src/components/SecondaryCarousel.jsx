import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import img1 from '../assets/Secondary Slider/ant-rozetsky-SLIFI67jv5k-unsplash.jpg'
import img2 from '../assets/Secondary Slider/tolu-olubode-PlBsJ5MybGc-unsplash.jpg'
import img3 from '../assets/Secondary Slider/dominik-vanyi-F1B0-iuAxO4-unsplash.jpg'
import img4 from '../assets/Secondary Slider/edgar-chaparro-HnFosyNwbPo-unsplash.jpg'
import img5 from '../assets/Secondary Slider/marius-masalar-FpIhxlsQ9F8-unsplash.jpg'
import img6 from '../assets/Secondary Slider/jacob-spaccavento-3-iklmQ3rAY-unsplash.jpg'
import img7 from '../assets/Secondary Slider/riccardo-farinazzo-HIIDt5hWSP8-unsplash.jpg'
const SecondaryCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      autoplay={true}
      spaceBetween={24}
      slidesPerView={5}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='w-3/4 mt-20'>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img1} className='brightness-75 object-cover object-center h-40 w-64' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img2} className='brightness-75 object-cover object-center h-40 w-64' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img3} className='brightness-75 object-cover object-center h-40 w-64' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img4} className='brightness-75 object-cover object-center h-40 w-64' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img5} className='brightness-75 object-cover object-center h-40 w-64' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img6} className='brightness-75 object-cover object-center w-64 h-40' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img7} className='brightness-75 object-cover object-center w-64 h-40' />
      </SwiperSlide>
    </Swiper >
  )
}
export default SecondaryCarousel
