import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import img1 from '../assets/ant-rozetsky-SLIFI67jv5k-unsplash.jpg'
import img2 from '../assets/Secondary Slider/tolu-olubode-PlBsJ5MybGc-unsplash.jpg'
import img3 from '../assets/Secondary Slider/dominik-vanyi-F1B0-iuAxO4-unsplash.jpg'
import img4 from '../assets/Secondary Slider/edgar-chaparro-HnFosyNwbPo-unsplash.jpg'
import img5 from '../assets/Secondary Slider/marius-masalar-FpIhxlsQ9F8-unsplash.jpg'
import img6 from '../assets/Secondary Slider/jacob-spaccavento-3-iklmQ3rAY-unsplash.jpg'
import img7 from '../assets/Secondary Slider/riccardo-farinazzo-HIIDt5hWSP8-unsplash.jpg'
const SecondaryCarousel = () => {
  let numSlides;
  if (window.innerWidth < 640) {
    numSlides = 1
  }
  else if (window.innerWidth < 768) {
    numSlides = 3
  }
  else if (window.innerWidth < 1024) {
    numSlides = 4
  }
  else {
    numSlides = 5
  }
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      modules={[Navigation, Autoplay]}
      loop={true}
      autoplay={true}
      spaceBetween={24}
      slidesPerView={numSlides}
      navigation
      className='w-3/4 mt-24 mb-10'>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img1} loading='lazy' className='brightness-75 object-cover object-center h-40 w-64' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img2} loading='lazy' className='brightness-75 object-cover object-center h-40 w-64' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img3} loading='lazy' className='brightness-75 object-cover object-center h-40 w-64' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img4} loading='lazy' className='brightness-75 object-cover object-center h-40 w-64' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img5} loading='lazy' className='brightness-75 object-cover object-center h-40 w-64' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img6} loading='lazy' className='brightness-75 object-cover object-center w-64 h-40' />
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img7} loading='lazy' className='brightness-75 object-cover object-center w-64 h-40' />
      </SwiperSlide>
    </Swiper >
  )
}
export default SecondaryCarousel
