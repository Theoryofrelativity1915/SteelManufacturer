import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import img1 from '../assets/joe-holland-80zZ1s24Nag-unsplash.jpg'
import img2 from '../assets/umit-yildirim-9OB46apMbC4-unsplash.jpg'
import img3 from '../assets/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg'
import img4 from '../assets/samuel-regan-asante-g9A2llpDObU-unsplash.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      autoplay={false}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='max-w-full h-auto max-h-[40vh] xl:h-[580px]'>
      <SwiperSlide className='flex max-h-[40vh] justify-center items-center'>
        <img src={img1} className='brightness-75 object-cover object-center w-full h-auto max-h-[40vh]' />
        <div className='absolute text-white p-10 border border-white text-xl md:text-8xl '>
          <span>Design your dream</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex max-h-[40vh] justify-center items-center'>
        <img src={img2} className='brightness-75 object-cover object-center w-full h-auto max-h-[40vh]' />
        <div className='absolute text-white p-10 border border-white text-xl md:text-8xl '>
          <span>Great construction</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex max-h-[40vh] justify-center items-center'>
        <img src={img3} className='brightness-75 object-cover object-center w-full h-auto max-h-[40vh]' />
        <div className='absolute text-white p-10 border border-white text-xl md:text-8xl '>
          <span>American made</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex max-h-[40vh] justify-center items-center'>
        <img src={img4} className='brightness-75 object-cover object-center w-full h-auto max-h-[40vh]' />
        <div className='absolute text-white p-10 border border-white text-xl md:text-8xl '>
          <span>The finest steel</span>
        </div>
      </SwiperSlide>
    </Swiper >
  );
}

export default ImageCarousel
