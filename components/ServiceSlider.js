//import swiper
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import { FreeMode, Pagination } from 'swiper';

// icons
import {
  RxMobile,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxPencil1,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxMobile />,
    title: 'Mobile Development',
    description: 'I can help you design and build mobile application with the latest and trendiest look and feel.',
  },
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'If you are looking for a web developer who’ll take over the development of your website.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UI/UX Design',
    description: 'An effective UI/UX is what captures attention and spreads a clear message.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Logo & Graphic Design',
    description: 'I can help you design those that will fit and match into the website and app quickly.',
  },
  
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Just like graphics, I can help you create amazing content that complements my design and your business.',
  },
  
];

const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
    }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className='h-[200px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index) => {
          return <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-5 py-5 flex sm:flex-col gap-x-3 sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer: hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='h5 max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-2xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        })
      }
    
    
    </Swiper>
  );
};

export default ServiceSlider;
