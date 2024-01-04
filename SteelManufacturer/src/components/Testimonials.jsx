import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import testimonialImg1 from '../assets/testimonials/andrew-power-y9L5-wmifaY-unsplash.jpg'
import testimonialImg2 from '../assets/testimonials/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg'
import testimonialImg3 from '../assets/testimonials/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'
export const Testimonials = () => {
  return (
    <div className='bg-hero items-center bg-fixed bg-center bg-contain w-full min-h-96 h-auto max-h-[40vh]' >
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={false}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='max-w-full flex items-center xl:h-[580px]'>
        <SwiperSlide className='flex min-h-96 max-h-[40vh] justify-center items-center'>
          <div className='flex h-[100%] fixed flex-col mx-auto my-auto gap-6 justify-center items-center max-w-xl'>
            <img className='rounded-[144px] w-28 h-28 object-cover object-top' src={testimonialImg2} />
            <p className='text-center text-white'>"Corona Steel surpassed all expectations in constructing our state-of-the-art data center warehouse. Their precision and expertise were evident from the outset, ensuring our project was completed seamlessly and within the set timeframe. Their attention to detail and commitment to quality made them an invaluable partner in bringing our vision to life."</p>
          </div>
        </SwiperSlide>
      </Swiper >
    </div>
  )
}
