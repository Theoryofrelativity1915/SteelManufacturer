import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import img1 from '../assets/joe-holland-80zZ1s24Nag-unsplash.jpg'
import img2 from '../assets/umit-yildirim-9OB46apMbC4-unsplash.jpg'
import img3 from '../assets/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg'
import img4 from '../assets/samuel-regan-asante-g9A2llpDObU-unsplash.jpg'
import placeholder1 from '../assets/joe-holland-80zZ1s24Nag-unsplash-small.jpg'
import placeholder2 from '../assets/umit-yildirim-9OB46apMbC4-unsplash-small.jpg'
import placeholder3 from '../assets/jeriden-villegas-VLPUm5wP5Z0-unsplash-small.jpg'
import placeholder4 from '../assets/samuel-regan-asante-g9A2llpDObU-unsplash-small.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

const ImageCarousel = () => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      lazyPreloadPrevNext={2}
      modules={[Navigation, Autoplay]}
      loop={true}
      autoplay={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      className='max-w-full h-auto max-h-[40vh] xl:h-[580px]'>
      <SwiperSlide className='flex max-h-[40vh] justify-center items-center'>
        {({ isActive }) => (<>
          <img src={img1} loading="eager" className='brightness-75 object-cover object-center w-full h-auto max-h-[40vh]' />
          <div className={isActive ? 'opacity-100 absolute text-white p-10 border border-white text-xl md:text-8xl delay-500 duration-700' : 'delay-500 duration-700 opacity-0 absolute text-white p-10 border border-white text-xl md:text-8xl'}>
            <span>Design your dream</span>
          </div>
        </>
        )}
      </SwiperSlide>
      <SwiperSlide className='flex max-h-[40vh] justify-center items-center'>
        {({ isActive }) => (<>
          <img src={img2} loading="eager" className='brightness-75 object-cover object-center w-full h-auto max-h-[40vh]' />
          <div className={isActive ? 'opacity-100 absolute text-white p-10 border border-white text-xl md:text-8xl delay-500 duration-700' : 'delay-500 duration-700 opacity-0 absolute text-white p-10 border border-white text-xl md:text-8xl'}>
            <span>Great construction</span>
          </div>
        </>
        )}
      </SwiperSlide>
      <SwiperSlide className='flex max-h-[40vh] justify-center items-center'>
        {({ isActive }) => (<>
          <img src={img3} loading="lazy" className='brightness-75 object-cover object-center w-full h-auto max-h-[40vh]' />
          <div className={isActive ? 'opacity-100 absolute text-white p-10 border border-white text-xl md:text-8xl delay-500 duration-700' : 'delay-500 duration-700 opacity-0 absolute text-white p-10 border border-white text-xl md:text-8xl'}>
            <span>American made</span>
          </div>
        </>
        )}
      </SwiperSlide>
      <SwiperSlide className='flex max-h-[40vh] justify-center items-center'>
        {({ isActive }) => (<>
          <img src={img4} loading='lazy' className='brightness-75 object-cover object-center w-full h-auto max-h-[40vh]' />
          <div className={isActive ? 'opacity-100 absolute text-white p-10 border border-white text-xl md:text-8xl delay-500 duration-700' : 'delay-500 duration-700 opacity-0 absolute text-white p-10 border border-white text-xl md:text-8xl'}>
            <span>The finest steel</span>
          </div>
        </>
        )}
      </SwiperSlide>
    </Swiper >
  );
}

export default ImageCarousel
