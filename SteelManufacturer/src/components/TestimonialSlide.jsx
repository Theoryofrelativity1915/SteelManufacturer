import { SwiperSlide, } from 'swiper/react';

const Testimonials = ({ img, text, name }) => {
  return (
    <SwiperSlide className='flex min-h-96 h-auto max-h-[40vh] justify-center items-center'>
      <div className='flex h-[100%] fixed flex-col mx-auto my-auto gap-6 justify-center items-center max-w-xl'>
        <img className='rounded-[144px] w-28 h-28 object-cover object-top' src={img} />
        <p className='text-center text-white'>"{text}"</p>
        <p className='text-center text-white'>"{name}"</p>
      </div>
    </SwiperSlide>
  )
}
export default Testimonials;
