import testimonial1 from '../../assets/testimonials/testimonial1.webp';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../swiper.css';


export function TestSlider() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className='flex flex-col lg:flex-row gap-12 lg:gap-32'>
            <div className='w-48 h-48 lg:w-[328px] lg:h-[328px]'>
              <img src={testimonial1} alt='' className='rounded-2xl' />
            </div>
            <div className='flex flex-col max-w-3xl'>
              <h5 className=' text-2xl mb-8 italic font-normal'>
                'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.'
              </h5>
              <div>
                <p className='text-lg text-accent'>
                  John Doe
                </p>
                <p>'Head of Design, Google'</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
