// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/prceu1.jpg',
        },
        {
          title: 'title',
          path: '/prceu2.jpg',
        },
        
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/prceu3.jpg',
        },
        {
          title: 'title',
          path: '/prceu1.jpg',
        },
        
      ],
    },
    
    {
      images: [
        {
          title: 'title',
          path: '/xp1.png',
        },
        {
          title: 'title',
          path: '/xp2.png',
        },
        
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/xp3.png',
        },
        {
          title: 'title',
          path: '/xp4.png',
        },
        
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/xp5.png',
        },
        {
          title: 'title',
          path: '/xp6.png',
        },
        
      ],
    },{
      images: [
        {
          title: 'title',
          path: '/xp7.png',
        },
        {
          title: 'title',
          path: '/xp8.png',
        },
        
      ],
    },
  ],
};



//import swiper
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper';

// icons
import {
  BsArrowRight
} from "react-icons/bs";

import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper

    spaceBetween={10}   
    pagination={{
      clickable: true
    }}
    modules={[ Pagination]}
    className='h-full sm:h-full' 
    >
      {
        workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-1 gap-5 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return (
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                      <div className='flex items-center justify-center relative overflow-hidden group'/>
                        
                        <Image src={image.path} width={250} height={600} alt='' className='rounded-lg shadow-xl'/>
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-50 transition-all duration-700 '>                                             
                        </div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 '>
                          
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            
                            
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight/>
                            </div>
                            
                          </div>

                        </div>
                      </div>
                                      
                  );
                })}
              
              </div>

              

          </SwiperSlide>
          );
          
        })
      }
    
    
    </Swiper>
  );
};

export default WorkSlider;
