import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import testimonialImg1 from '../assets/testimonials/andrew-power-y9L5-wmifaY-unsplash.jpg'
import testimonialImg2 from '../assets/testimonials/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg'
import testimonialImg3 from '../assets/testimonials/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg'
import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonials = () => {
  const testimonial1 = "Corona Steel surpassed all expectations in constructing our state-of-the-art data center warehouse. Their precision and expertise were evident from the outset, ensuring our project was completed seamlessly and within the set timeframe. Their attention to detail and commitment to quality made them an invaluable partner in bringing our vision to life."
  const testimonial2 = "Corona Steel's professionalism and dedication shone through in the construction of our commercial high-rise. Their team's efficiency and expertise transformed our architectural plans into a breathtaking reality, and their unwavering commitment to excellence was evident in every beam and joint of the structure. We highly recommend Corona Steel for their exceptional craftsmanship and reliability."
  const testimonial3 = "The expertise displayed by Corona Steel in constructing our industrial manufacturing facility was simply exceptional. Their ability to navigate complex structural challenges with finesse and precision was commendable. From the initial planning stages to the final execution, their professionalism and commitment to delivering a superior product were evident. Corona Steel stands as a testament to reliability and excellence in the steel construction industry."
  return (
    <div className='bg-hero items-center bg-fixed bg-center bg-contain w-full min-h-[464px] md:min-h-[524px] max-h-[40vh]' >
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        pagination={true}
        autoHeight={true}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        className='flex items-center max-w-3xl justify-center min-h-[464px] md:min-h-[524px]'>
        <SwiperSlide className='flex xl:min-h-[384px] justify-center items-center'>
          <div className='flex fixed flex-col mx-auto my-auto gap-6 justify-center items-center w-3/4'>
            <img className='rounded-[144px] w-28 h-28 object-cover object-top' src={testimonialImg2} />
            <p className='text-sm sm:text-xl text-center text-white max-w-lg'>{testimonial1}</p>
            <p className='text-center text-white max-w-lg'>John, Lead Engineer at Adobe</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex xl:min-h-[384px] justify-center items-center'>
          <div className='flex fixed flex-col mx-auto my-auto gap-6 justify-center items-center w-3/4'>
            <img className='rounded-[144px] w-24 h-24 sm:w-28 sm:h-28 object-cover object-top' src={testimonialImg1} />
            <p className='text-sm sm:text-xl text-center text-white max-w-lg'>{testimonial2}</p>
            <p className='text-center text-white max-w-lg'>Mark, Head of Regional Development at Amazon</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='flex xl:min-h-[384px] justify-center items-center'>
          <div className='flex fixed flex-col mx-auto my-auto gap-6 justify-center items-center w-3/4'>
            <img className='rounded-[144px] w-24 h-24 sm:w-28 sm:h-28 object-cover object-top' src={testimonialImg3} />
            <p className='text-sm sm:text-xl text-center text-white max-w-lg'>{testimonial3}</p>
            <p className='text-center text-white max-w-lg'>Christine, Head of Operations at GE</p>
          </div>
        </SwiperSlide>
      </Swiper >
    </div>
  )
}
