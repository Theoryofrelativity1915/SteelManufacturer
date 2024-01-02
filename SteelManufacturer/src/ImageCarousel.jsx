import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import img1 from './assets/joe-holland-80zZ1s24Nag-unsplash.jpg'
import img2 from './assets/umit-yildirim-9OB46apMbC4-unsplash.jpg'
import img3 from './assets/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg'
import img4 from './assets/samuel-regan-asante-g9A2llpDObU-unsplash.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      autoplay={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='max-w-full h-[580px]'>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img1} className='brightness-75 object-cover object-center w-full h-auto max-h-[580px]' />
        <div className='absolute text-white text-8xl p-10 border border-white'>
          <span>Design your dream</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img2} className='brightness-75 object-cover object-center w-full h-auto max-h-[580px]' />
        <div className='absolute text-white text-8xl p-10 border border-white'>
          <span>Great construction</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img3} className='brightness-75 object-cover object-center w-full h-auto max-h-[580px]' />
        <div className='absolute text-white text-8xl p-10 border border-white'>
          <span>American made</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center items-center'>
        <img src={img4} className='brightness-75 object-cover object-center w-full h-auto max-h-[580px]' />
        <div className='absolute text-white text-8xl p-10 border border-white'>
          <span>The finest steel</span>
        </div>
      </SwiperSlide>
    </Swiper >
  );
}

export default ImageCarousel
